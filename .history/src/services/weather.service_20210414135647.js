import axios from 'axios'
const BASE_WEATHER_URL = 'http://localhost:4000/'

export const fetchWeatherByCity = async (zipCode, unit) => {
  const response = await axios({
    url: `${BASE_WEATHER_URL}/weather?zipCode=${zipCode}`,
    method: 'GET'
  })
  console.log('response', response);
  
  return response.data
}
