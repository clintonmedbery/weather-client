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
  const [forecastDays, setForecastDays] = useState(CURRENT_DAY)

  const formattedWeatherData = useMemo(() => {
    let newWeatherData = weather.slice(0, forecastDays)
    return newWeatherData.map((weatherItem, index) => (
      <div>
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

  const changeZip = value => {
    value = value.replace(/[^\d]/g, '')
    setZipCode(value)
  }

  const getWeather = async () => {
    try {
      const newWeather = await fetchWeatherByCity(zipCode)
      setWeather(weather)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Header zipCode={zipCode} changeZip={changeZip} getWeather={getWeather} />
      {formattedWeatherData.length > 0 && (
          <>
            <div className={'styles.cardsWrapper'}>
              {formattedWeatherData}
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

const Header = ({ zipCode, changeZip, getWeather }) => {
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
        <Button icon={faSearch} onClick={getWeather} />
      </div>
    </div>
  )
}
