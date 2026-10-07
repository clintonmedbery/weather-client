import { render, screen } from '@testing-library/react'
import React from 'react'
import WeatherCard from '../business-components/weather-card/weather-card.component'

const desc = 'Rainy Days'
test('renders footer text for 1 day forecast', () => {
  render(
    <WeatherCard iconName={'c02d'} description={desc} temperature={69.2} date='4-15-2021'/>
  )
  const descEl = screen.getByText(desc)
  expect(descEl).toBeInTheDocument()
  const tempEl = screen.getByText("69.2 F")
  expect(tempEl).toBeInTheDocument()
  const dayEl = screen.getByText("Thursday")
  expect(dayEl).toBeInTheDocument()
})

