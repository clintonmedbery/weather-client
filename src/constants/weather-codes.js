// Maps WMO weather codes (used by Open-Meteo) to a description and the
// matching icon in public/weather-icons (originally Weatherbit's icon set).
// https://open-meteo.com/en/docs#weather_variable_documentation
export const WEATHER_CODES = {
  0: { description: 'Clear sky', icon: 'c01' },
  1: { description: 'Mainly clear', icon: 'c02' },
  2: { description: 'Partly cloudy', icon: 'c03' },
  3: { description: 'Overcast', icon: 'c04' },
  45: { description: 'Fog', icon: 'a05' },
  48: { description: 'Freezing fog', icon: 'a06' },
  51: { description: 'Light drizzle', icon: 'd01' },
  53: { description: 'Drizzle', icon: 'd02' },
  55: { description: 'Heavy drizzle', icon: 'd03' },
  56: { description: 'Freezing drizzle', icon: 'f01' },
  57: { description: 'Freezing drizzle', icon: 'f01' },
  61: { description: 'Light rain', icon: 'r01' },
  63: { description: 'Rain', icon: 'r02' },
  65: { description: 'Heavy rain', icon: 'r03' },
  66: { description: 'Freezing rain', icon: 'f01' },
  67: { description: 'Freezing rain', icon: 'f01' },
  71: { description: 'Light snow', icon: 's01' },
  73: { description: 'Snow', icon: 's02' },
  75: { description: 'Heavy snow', icon: 's03' },
  77: { description: 'Snow grains', icon: 's06' },
  80: { description: 'Light showers', icon: 'r04' },
  81: { description: 'Showers', icon: 'r05' },
  82: { description: 'Heavy showers', icon: 'r06' },
  85: { description: 'Snow showers', icon: 's01' },
  86: { description: 'Heavy snow showers', icon: 's02' },
  95: { description: 'Thunderstorm', icon: 't02' },
  96: { description: 'Thunderstorm with hail', icon: 't05' },
  99: { description: 'Thunderstorm with hail', icon: 't05' }
}

export const UNKNOWN_WEATHER = { description: 'Unknown', icon: 'u00' }
