import axios from 'axios'
import { BAD_ZIP } from '../constants/constants'
import { UNKNOWN_WEATHER, WEATHER_CODES } from '../constants/weather-codes'

const ZIP_LOOKUP_URL = 'https://api.zippopotam.us/us'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

export const F_UNIT = 'I'
export const M_UNIT = 'M'

const lookupZipCode = async zipCode => {
  try {
    const response = await axios.get(`${ZIP_LOOKUP_URL}/${zipCode}`)
    const place = response.data.places[0]
    return {
      cityName: place['place name'],
      latitude: place.latitude,
      longitude: place.longitude
    }
  } catch (e) {
    if (e.response?.status === 404) throw new Error(BAD_ZIP)
    throw e
  }
}

export const fetchWeatherByZipCode = async (zipCode, unit = F_UNIT) => {
  const { cityName, latitude, longitude } = await lookupZipCode(zipCode)

  const response = await axios.get(FORECAST_URL, {
    params: {
      latitude,
      longitude,
      daily: 'weather_code,temperature_2m_max,temperature_2m_min',
      temperature_unit: unit === M_UNIT ? 'celsius' : 'fahrenheit',
      timezone: 'auto',
      forecast_days: 5
    }
  })

  const daily = response.data.daily
  const weatherData = daily.time.map((date, index) => {
    const { description, icon } =
      WEATHER_CODES[daily.weather_code[index]] ?? UNKNOWN_WEATHER
    const average =
      (daily.temperature_2m_max[index] + daily.temperature_2m_min[index]) / 2
    return {
      date,
      temperature: Math.round(average * 10) / 10,
      description,
      iconName: `${icon}d`
    }
  })

  return {
    cityName,
    data: weatherData
  }
}
