import React, { useState, useMemo, useEffect } from 'react'
import WeatherCard from '../../business-components/weather-card/weather-card.component'
import { BAD_ZIP } from '../../constants/constants'
import { fetchWeatherByZipCode } from '../../services/weather.service'
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
  //In the future we pass this back to the API
  const [forecastDays, setForecastDays] = useState(CURRENT_DAY)

  //If zipcode is initialized from local storage, then lets get the weather
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
      const newWeather = await fetchWeatherByZipCode(zipCode)      
      setCityName(newWeather.cityName)
      setWeather(newWeather.data)
      //If this is a successful call, we set the zip to be a default so you can revisit
      localStorage.setItem('lastZipCode', zipCode)
    } catch (e) {
      console.log(e.message)
      if (e.message === BAD_ZIP) {
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
    <div className='pb-48'>
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
    </div>
  )
}

export default WeatherPage
