import React, { useState, useMemo, useEffect } from 'react'
import WeatherCard from '../../business-components/weather-card/weather-card.component'
import { fetchWeatherByCity } from '../../services/weather.service'
import { Button } from '../../ui-components/button.component'
import { WeatherFooter } from './weather-footer.component'
import { WeatherHeader } from './weather-header.component'
const CURRENT_DAY = 1
const FIVE_DAYS = 5

const WeatherPage = () => {
  const [zipCode, setZipCode] = useState(localStorage.getItem('lastZipCode'))
  const [weather, setWeather] = useState([])
  const [cityName, setCityName] = useState(null)
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [zipError, setZipError] = useState(false)
  const [forecastDays, setForecastDays] = useState(CURRENT_DAY)

  useEffect(() => {
    if (zipCode) {
      getWeather()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const formattedWeatherData = useMemo(() => {
    let newWeatherData = weather.slice(0, forecastDays)
    return newWeatherData.map((weatherItem, index) => (
      <div key={index} className='mx-auto mb-3 space-x-3 flex-1'>
        <WeatherCard
          iconName={weatherItem.iconName}
          date={weatherItem.date}
          temperature={weatherItem.temperature}
          description={weatherItem.description}
        />
      </div>
    ))
  }, [weather, forecastDays])

  const changeZip = value => {
    value = value.replace(/[^\d]/g, '')
    setZipCode(value)
  }

  const getWeather = async () => {
    setZipError(false)
    setCityName(null)
    setWeather([])
    try {
      setWeatherLoading(true)
      const newWeather = await fetchWeatherByCity(zipCode)
      setCityName(newWeather.cityName)
      setWeather(newWeather.data)
      localStorage.setItem('lastZipCode', zipCode)
    } catch (e) {
      if (e.response.status === 400) {
        setZipError(true)
      }
    }
    setWeatherLoading(false)
  }

  const toggleForecastDays = () => {
    forecastDays === CURRENT_DAY
      ? setForecastDays(FIVE_DAYS)
      : setForecastDays(CURRENT_DAY)
  }
  const moreButtonMessage =
    forecastDays === CURRENT_DAY
      ? 'Show 5 Day Forecast'
      : 'Show Current Day Forecast'

  return (
    <>
      <WeatherHeader
        zipCode={zipCode}
        changeZip={changeZip}
        zipError={zipError}
        getWeather={getWeather}
        weatherLoading={weatherLoading}
      />
      {formattedWeatherData.length > 0 && (
        <>
          <div className={`md:flex`}>{formattedWeatherData}</div>
          <div className='mt-4'>
            <Button onClick={toggleForecastDays} title={moreButtonMessage} />
          </div>
        </>
      )}
      <WeatherFooter cityName={cityName} forecastDays={forecastDays} />
    </>
  )
}

export default WeatherPage
