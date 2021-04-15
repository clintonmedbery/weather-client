import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui-components/button.component'
import { Input } from '../ui-components/input.component'

const WeatherPage = props => {
  let [zipCode, setZipCode] = useState([])
  const changeZip = value => {
    value = value.replace(/[^\d]/g, '')
    setZipCode(value)
  }
  useEffect(() => {}, [])
  return (
    <>
      <Header />
    </>
  )
}

export default WeatherPage

const Header = ({zipCode, }) => {
  return (
    <div className='flex w-90 bg-red-50 m-3 p-3'>
      <div className='flex-grow'>Current Weather</div>
      <div className='flex-none'>
        <Input
          placeholder='Enter Zip Code'
          value={pin}
          onChange={e => {
            changePin(e.target.value)
          }}
          inputProps={{ name: 'pin', maxlength: 6 }}
        />
      </div>
      <div className='flex-none p-1'>
        <Button icon={faSearch} />
      </div>
    </div>
  )
}
