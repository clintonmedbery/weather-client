import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui-components/button.component'
import { Input } from '../ui-components/input.component'

const WeatherPage = props => {
  const [zipCode, setZipCode] = useState()
  const [weather, setWeather] = useState({})

  const changeZip = value => {
    value = value.replace(/[^\d]/g, '')
    setZipCode(value)
  }

  const getWeather = () => {
    const newWeather = await fetchWeatherByCity(zipCode)
  }

  return (
    <>
      <Header zipCode={zipCode} changeZip={changeZip} />
    </>
  )
}

export default WeatherPage

const Header = ({ zipCode, changeZip }) => {
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
        <Button icon={faSearch} />
      </div>
    </div>
  )
}
