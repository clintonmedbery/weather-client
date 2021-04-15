import dayjs from 'dayjs'
import React from 'react'
import DatePicker from 'react-datepicker'

export const INPUT_TYPES = Object.freeze({
  TEXT: 'text',
  PHONE: 'tel',
  PASSWORD: 'password',
  DATE: 'date'
})

export const Input = ({
  type = INPUT_TYPES.TEXT,
  placeholder,
  onChange,
  value,
  className = '',
  error,
  inputProps
}) => {
  if (type === INPUT_TYPES.DATE) {
    return (
      <DatePicker
        selected={value}
        onChange={(date) => {
          onChange(date)
        }}
        minDate={dayjs().toDate()}
        placeholderText="Select a deadline for this video"
        className={`rounded-full ${
          error ? 'border-red-500' : 'border-lightblue'
        } border-2 p-2 w-full focus:outline-none focus:border-blue-500 ${className}`}
      />
    )
  }

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`rounded-full ${
        error ? 'border-red-500' : 'border-lightblue'
      } border-2 p-2 focus:outline-none focus:border-blue-500 ${className}`}
      value={value}
      onChange={onChange}
      {...inputProps}
    />
  )
}