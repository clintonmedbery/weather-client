import React from 'react'
import dayjs from 'dayjs'
import * as PropTypes from 'prop-types'
import { F_UNIT, M_UNIT } from '../constants/constants'

const propTypes = {
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  unit: PropTypes.oneOf([F_UNIT, M_UNIT])
}

const defaultProps = {
  iconName: '',
  description: '',
  date: '1-1-2021',
  temperature: null,
  unit: F_UNIT
}

const WeatherCard = ({ iconName, description, date, temperature, unit }) => {
  const dayOfWeek = dayjs(date).format('dddd')
  const unitLabel = F_UNIT === unit ? 'F' : 'C'
  return (
    <div className='text-shadow color-white bg-gradient-to-b from-indigo to-indigo-20 rounded-xl shadow-md w-10/12 md:w-40 lg:w-44 mx-auto'>
      <div>{dayOfWeek}</div>
      <img src={`/weather-icons/${iconName}.png`} className='mx-auto' />
      <div>{`${temperature} ${unitLabel}`}</div>
      <div>{description}</div>
    </div>
  )
}
WeatherCard.propTypes = propTypes
WeatherCard.defaultProps = defaultProps

export default WeatherCard