import React, { useState, useEffect } from 'react'


const WeatherPage = (props) => {
  let [WeatherPage, setWeatherPages] = useState([])
  useEffect(() => {
  }, [])
  return (
    <>
    </>
  )
}


export default WeatherPage

const Header = () => {
  return (
    <div>
      <div>Current Weather</div>
      <Input/>
    </div>
  )
}