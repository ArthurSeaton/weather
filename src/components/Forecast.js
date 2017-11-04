import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { groupByDay } from '../utils/utils';

import 'react-tabs/style/react-tabs.css';

const createDayTabs = (days) =>
  days.map(day => (<Tab>{day}</Tab>));

const Forecast = ({ forecast }) => {
  const forecastByDay = groupByDay(forecast);
  const days = Array.from(forecastByDay.keys());
  return (
    <Tabs>
      <TabList>
        { createDayTabs(days) }
      </TabList>
    </Tabs>
  );
};

export default Forecast;
