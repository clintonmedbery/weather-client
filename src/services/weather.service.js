import axios from 'axios'
import { BAD_ZIP } from '../constants/constants'

const BASE_WEATHER_URL = 'https://api.weatherbit.io/v2.0'
const WEATHERBIT_API_KEY = process.env.REACT_APP_WEATHERBIT_API_KEY

export const F_UNIT = 'I'
export const M_UNIT = 'M'

export const fetchWeatherByZipCode = async (zipCode, unit = F_UNIT) => {
  const response = await axios({
    url: `${BASE_WEATHER_URL}/forecast/daily?postal_code=${zipCode}&units=${unit}&key=${WEATHERBIT_API_KEY}`,
    method: 'GET'
  })
  if(response.status === 204) throw new Error(BAD_ZIP)

  const responseData = response?.data?.data
  const weatherData = responseData
      .map(weatherItem => {
        return {
          date: weatherItem.datetime,
          temperature: weatherItem.temp,
          description: weatherItem.weather.description,
          iconName: weatherItem.weather.icon
        }
      })
      .splice(0, 5)
    const weather = {
      cityName: response?.data.city_name,
      data: weatherData
    }
    return weather
}
