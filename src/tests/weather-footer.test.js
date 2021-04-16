import { render, screen } from '@testing-library/react'
import { WeatherFooter } from '../modules/weather-page/weather-footer.component'

test('renders footer text for 1 day forecast', () => {
  render(<WeatherFooter cityName={'Charleston'} forecastDays={1} />)
  const linkElement = screen.getByText(/Conditions at Charleston/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders footer text for 5 day forecast', () => {
  render(<WeatherFooter cityName={'Charleston'} forecastDays={5} />)
  const linkElement = screen.getByText(/Five day forecast for Charleston/i)
  expect(linkElement).toBeInTheDocument()
})

