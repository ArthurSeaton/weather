import React from 'react';

import City from './City';
import Forecast from './Forecast';

import './Weather.css';

const Weather = ({ weather: { city, list: forecast } }) => (
  <div className="weather">
    <City city={city} />
    <Forecast forecast={forecast} />
  </div>
);

export default Weather;
