import React from 'react'
import dayjs from 'dayjs'
import { F_UNIT } from '../../constants/constants'
import styles from './weather-card.styles.module.css'

const WeatherCard = ({
  iconName = '',
  description = '',
  date = '1-1-2021',
  temperature = null,
  unit = F_UNIT
}) => {
  const dayOfWeek = dayjs(date).format('dddd')
  const unitLabel = F_UNIT === unit ? 'F' : 'C'
  return (
    <div
      className={`${styles.card} text-shadow-retro text-white  bg-indigo w-10/12 md:w-40 lg:w-44 mx-auto py-2`}
    >
      <div>{dayOfWeek}</div>
      <img src={`/weather-icons/${iconName}.png`} className='mx-auto' alt={iconName}/>
      <div>{`${temperature} ${unitLabel}`}</div>
      <div>{description}</div>
    </div>
  )
}

export default WeatherCard
