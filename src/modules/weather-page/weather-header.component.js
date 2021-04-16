import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button } from '../../ui-components/button.component'
import { Input } from '../../ui-components/input.component'
import styles from './weather-page.styles.module.css'

export const WeatherHeader = ({
  zipCode,
  changeZip,
  zipError,
  getWeather,
  weatherLoading
}) => {
  return (
    <div className={`${styles.header} flex w-full my-3 p-3 h-24`}>
      <img
        src='./logo.png'
        className='w-20 md:w-20 h-auto'
        alt='weather channel logo'
      />
      <div className='my-auto ml-3 text-left flex-grow text-grungegreen text-shadow-black text-xl'>
        Current Weather
      </div>
      <div className='flex-none my-auto h-20 mt-3'>
        <Input
          placeholder='Enter Zip Code'
          value={zipCode}
          onChange={e => {
            changeZip(e.target.value)
          }}
          inputProps={{ maxLength: 5 }}
          className="w-36"
          errorMessage={zipError ? 'Invalid Zip Code' : null}
        />
      </div>
      <div className='flex-none p-1 my-auto'>
        <Button
          icon={faSearch}
          onClick={getWeather}
          disabled={weatherLoading}
        />
      </div>
    </div>
  )
}
