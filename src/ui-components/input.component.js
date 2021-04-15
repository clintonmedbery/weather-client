import React from 'react'

export const INPUT_TYPES = Object.freeze({
  TEXT: 'text',
  PASSWORD: 'password'
})

export const Input = ({
  type = INPUT_TYPES.TEXT,
  placeholder,
  onChange,
  value,
  className = '',
  errorMessage,
  inputProps
}) => {

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className={`rounded-full ${
          errorMessage ? 'border-red-500' : 'border-lightblue'
        } border-2 p-2 focus:outline-none focus:border-blue-500 ${className}`}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      {errorMessage && (
        <div className='text-left  ml-1 text-red-500 text-sm'>
          {errorMessage}
        </div>
      )}
    </>
  )
}
