import axios from 'axios'
import { BAD_ZIP } from '../constants/constants'
import { fetchWeatherByZipCode } from '../services/weather.service'

vi.mock('axios')

const zipResponse = {
  data: {
    places: [{ 'place name': 'Charleston', latitude: '32.7795', longitude: '-79.9371' }]
  }
}

const forecastResponse = {
  data: {
    daily: {
      time: ['2026-10-07', '2026-10-08'],
      weather_code: [3, 1234],
      temperature_2m_max: [76.3, 80.4],
      temperature_2m_min: [64.7, 63.2]
    }
  }
}

afterEach(() => {
  vi.resetAllMocks()
})

test('maps the zip lookup and forecast into weather data', async () => {
  axios.get.mockResolvedValueOnce(zipResponse).mockResolvedValueOnce(forecastResponse)

  const weather = await fetchWeatherByZipCode('29401')

  expect(axios.get).toHaveBeenLastCalledWith(
    'https://api.open-meteo.com/v1/forecast',
    expect.objectContaining({
      params: expect.objectContaining({ latitude: '32.7795', temperature_unit: 'fahrenheit' })
    })
  )
  expect(weather).toEqual({
    cityName: 'Charleston',
    data: [
      { date: '2026-10-07', temperature: 70.5, description: 'Overcast', iconName: 'c04d' },
      { date: '2026-10-08', temperature: 71.8, description: 'Unknown', iconName: 'u00d' }
    ]
  })
})

test('throws BAD_ZIP when the zip code is not found', async () => {
  axios.get.mockRejectedValueOnce({ response: { status: 404 } })

  await expect(fetchWeatherByZipCode('00000')).rejects.toThrow(BAD_ZIP)
})
