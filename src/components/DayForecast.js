import React from 'react';

import Row from './Row';

import { stripeObjects } from '../utils/utils';

import './DayForecast.css';

const properties = ['dt_txt', 'weather', 'main', 'wind'];
const headers = ['', '', 'Temp', 'Wind'];

const DayForecast = ({ timeForecasts }) => {
  const rows = stripeObjects(timeForecasts, properties, headers);
  return (
    <div className="table">
      {rows.map((cells, rowIndex) => (<Row cells={cells} rowIndex={rowIndex}></Row>))}
    </div>
  );
};

export default DayForecast;
