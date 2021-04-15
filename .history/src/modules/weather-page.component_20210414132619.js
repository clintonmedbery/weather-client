import React, { useState, useEffect } from 'react'
import { Button } from '../ui-components/button.component'
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
    <div className="flex w-90 bg-red-50 m-3 p-3">
      <div className="flex-grow">Current Weather</div>
      <div className="flex-none">
        <Input placeholder="Enter Zip Code"/>
      </div>
      <div className="flex-none">
        <Button icon={faSearch}/>
      </div>
    </div>
  )
}