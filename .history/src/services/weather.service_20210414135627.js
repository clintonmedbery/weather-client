import axios from 'axios'
const BASE_WEATHER_URL = 'http://localhost:4000/'

export const fetchWeatherByCity = async (zipCode, unit) => {
  //Normally I would say let's put this in an .env file, but that would just add more hassle for the reviewer
  //so lets just leave it here.
  const API_KEY = '087df1c12dd843fe81977a826ee692f1'
  const response = await axios({
    url: `${BASE_WEATHER_URL}/weather?zipCode=${zipCode}`,
    method: 'GET'
  })
  return response.data
}
