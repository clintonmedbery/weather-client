import React from 'react'
import * as PropTypes from 'prop-types'

export const INPUT_TYPES = Object.freeze({
  TEXT: 'text',
  PASSWORD: 'password'
})

const propTypes = {
  type: PropTypes.oneOf([INPUT_TYPES.TEXT, INPUT_TYPES.PASSWORD]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object
}

const defaultProps = {
  type: INPUT_TYPES.TEXT,
  placeholder: null,
  onChange: null,
  value: null,
  className: '',
  errorMessage: null,
  inputProps: null
}

const Input = ({
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
        <div className='text-shadow-black text-left  ml-1 text-red-500 text-sm'>
          {errorMessage}
        </div>
      )}
    </>
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export { Input }
