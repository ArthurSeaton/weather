const getDay = (dateTime) =>
  dateTime.split(' ')[0];

const assignToDay = (timeForecast, days) => {
  const { dt_txt: dateTime } = timeForecast;
  const day = getDay(dateTime);
  const forecasts = days.get(day) || [];
  forecasts.push(timeForecast);
  return days.set(day, forecasts);
};

/**
 * Use a Map to guarantee the iteration order. Map keys are the date, map
 * values are an array of forecasts for that date.
 */
export const groupByDay = (forecast) =>
  forecast.reduce((days, timeForecast) => assignToDay(timeForecast, days), new Map());
