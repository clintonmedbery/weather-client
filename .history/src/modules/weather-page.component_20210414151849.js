import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, useMemo } from 'react'
import WeatherCard from '../business-components/weather-card.component'
import { fetchWeatherByCity } from '../services/weather.service'
import { Button } from '../ui-components/button.component'
import { Input } from '../ui-components/input.component'

const CURRENT_DAY = 1
const FIVE_DAYS = 5

const WeatherPage = props => {
  const [zipCode, setZipCode] = useState()
  const [weather, setWeather] = useState([])
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [forecastDays, setForecastDays] = useState(CURRENT_DAY)

  const formattedWeatherData = useMemo(() => {
    let newWeatherData = weather.slice(0, forecastDays)
    return newWeatherData.map((weatherItem, index) => (
      <div className='flex space-x-3'>
        <WeatherCard
          key={index}
          iconName={weatherItem.iconName}
          date={weatherItem.date}
          temperature={weatherItem.temperature}
          description={weatherItem.description}
          // unit={unit}
        />
      </div>
    ))
  }, [weather, forecastDays])
  console.log('weather', weather)
  console.log('formattedWeatherData', formattedWeatherData)

  const changeZip = value => {
    value = value.replace(/[^\d]/g, '')
    setZipCode(value)
  }

  const getWeather = async () => {
    try {
      setWeatherLoading(true)
      const newWeather = await fetchWeatherByCity(zipCode)
      setWeather(newWeather)
    } catch (e) {
      console.log(e)
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
      <Header
        zipCode={zipCode}
        changeZip={changeZip}
        getWeather={getWeather}
        weatherLoading={weatherLoading}
      />
      {formattedWeatherData.length > 0 && (
        <>
          <div
            className={`grid grid-cols-${forecastDays} sm:grid-cols-1  gap-1`}
          >
            {formattedWeatherData}
          </div>
          <div className='mt-4'>
            <Button onClick={toggleForecastDays} title={moreButtonMessage} />
          </div>
          {/* <div className={styles.lowerControlsWrapper}>
              <Button onClick={toggleForecastDays}>{moreButtonMessage}</Button>
              <Tooltip title={'Copy link to share this page'}>
                <CopyOutlined className={styles.copyButton} onClick={copyToClipBoard} />
              </Tooltip>
            </div> */}
        </>
      )}
    </>
  )
}

export default WeatherPage

const Header = ({ zipCode, changeZip, getWeather, weatherLoading }) => {
  return (
    <div className='flex w-90 bg-red-50 m-3 p-3'>
      <div className='flex-grow'>Current Weather</div>
      <div className='flex-none'>
        <Input
          placeholder='Enter Zip Code'
          value={zipCode}
          onChange={e => {
            changeZip(e.target.value)
          }}
          inputProps={{ maxlength: 5 }}
        />
      </div>
      <div className='flex-none p-1'>
        <Button
          icon={faSearch}
          onClick={getWeather}
          disabled={weatherLoading}
        />
      </div>
    </div>
  )
}
