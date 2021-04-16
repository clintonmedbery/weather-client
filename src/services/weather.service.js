import axios from 'axios'
const BASE_WEATHER_URL = process.env.REACT_APP_BASE_WEATHER_URL

export const fetchWeatherByCity = async (zipCode) => {
  const response = await axios({
    url: `${BASE_WEATHER_URL}/weather?zipCode=${zipCode}`,
    method: 'GET'
  })
  return response.data
}
