const stripeObject = (obj, props, acc) => {
  props.forEach((p, index) => acc[index].push(obj[p]));
  return acc;
};

const createAccumulator = (props, headers) =>
  props.reduce((acc, prop, index) => {
    acc.push([headers[index]]);
    return acc;
  }, []);

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

/**
 * Returns an array of arrays. There is one contained array for each property in props.
 * The first value will always be the header for that row. There is one additional
 * value for each object in the objects array.
 */
export const stripeObjects = (objects, props, headers) =>
  objects.reduce((acc, obj) => stripeObject(obj, props, acc), createAccumulator(props, headers));
