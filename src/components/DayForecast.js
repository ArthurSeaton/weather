import React from 'react';

import { stripeObjects } from '../utils/utils';

const properties = ['dt_txt', 'weather', 'main', 'wind'];
const headers = ['', '', 'Temp', 'Wind'];

const DayForecast = ({ timeForecasts }) => {
  const rows = stripeObjects(timeForecasts, properties, headers);
  return (<div>days forecast...</div>);
};

export default DayForecast;
