import React from 'react';

import City from './City';
import Forecast from './Forecast';

const Weather = ({ weather: { city, list: forecast } }) => (
  <div>
    <City city={city} />
    <Forecast forecast={forecast} />
  </div>
);

export default Weather;
