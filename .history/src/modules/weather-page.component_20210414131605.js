import React, { useState, useEffect } from 'react'
import { Input } from '../ui-components/input.component'

const WeatherPage = props => {
  let [WeatherPage, setWeatherPages] = useState([])
  useEffect(() => {}, [])
  return (
    <>
      <Header />
    </>
  )
}

export default WeatherPage

const Header = () => {
  return (
    <div className="w-90 bg">
      <div>Current Weather</div>
      <Input />
    </div>
  )
}
