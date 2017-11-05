import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import DayForecast from './DayForecast';
import Day from './Day';

import { groupByDay } from '../utils/utils';

import 'react-tabs/style/react-tabs.css';

const createDayPanels = (forecastByDay) =>
  Array.from(forecastByDay.values())
    .map(fc => (<TabPanel><DayForecast timeForecasts={fc}></DayForecast></TabPanel>));

const createDayTabs = (days) =>
  days.map(day => (<Tab><Day day={day} /></Tab>));

const Forecast = ({ forecast }) => {
  const forecastByDay = groupByDay(forecast);
  const days = Array.from(forecastByDay.keys());
  return (
    <Tabs>
      <TabList>
        { createDayTabs(days) }
      </TabList>
      { createDayPanels(forecastByDay) }
    </Tabs>
  );
};

export default Forecast;
