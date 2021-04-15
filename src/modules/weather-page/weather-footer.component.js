import React from 'react';

export const WeatherFooter = ({ cityName, forecastDays }) => {
  return (
    <div className='absolute bottom-0 w-full bg-indigo h-32'>
      <div className='mt-3 ml-8 text-left text-white text-sh text-xl'>
        {forecastDays > 0 &&
          cityName &&
          `${forecastDays === 1 ? 'Conditions at' : 'Five day forecast for'} ${cityName}`}
      </div>
    </div>
  );
};
