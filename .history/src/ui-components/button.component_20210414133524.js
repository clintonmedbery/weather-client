import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const BUTTON_TYPES = Object.freeze({
  PRIMARY: 'primary',
  LIGHT: 'light'
})

const styles = {
  roundButton:
    'rounded-full hover:bg-blue-700 text-white font-normal py-2 px-4 rounded text-sm focus:outline-none focus:ring',
  lightRoundButton:
    'rounded-full hover:bg-grey  border-solid border border-indigo text-indigo font-normal py-2 px-4 rounded text-sm focus:outline-none focus:ring'
}

const colors = {
  blue: 'bg-blue-500',
  white: 'bg-white'
}

export const Button = ({
  title,
  className,
  onClick,
  disabled,
  type = BUTTON_TYPES.PRIMARY,
  icon
}) => {
  let buttonStyle, buttonColor
  switch (type) {
    case BUTTON_TYPES.PRIMARY:
      buttonStyle = styles.roundButton
      buttonColor = colors.blue
      break
    case BUTTON_TYPES.LIGHT:
      buttonStyle = styles.lightRoundButton
      buttonColor = colors.white
      break
    default:
      buttonStyle = styles.roundButton
      buttonColor = colors.blue
      break
  }

  return (
    <button
      className={`${buttonStyle} ${className} ${
        disabled ? 'bg-disabledgray cursor-not-allowed' : buttonColor
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <FontAwesomeIcon style={{ marginBottom: '-.05em', marginRight: title ?'.3em' }} icon={icon} />
      )}
      {title}
    </button>
  )
}