import fetchOpenWeather from '../api/api';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const FETCH_ERROR = 'FETCH_ERROR';

const requestWeather = () => ({
  type: REQUEST_WEATHER
});

const receiveWeather = (weather) => ({
  type: RECEIVE_WEATHER,
  weather
});

const fetchError = (error) => ({
  type: FETCH_ERROR,
  error
});

const fetchWeather = () =>
  (dispatch) => {
    dispatch(requestWeather());
    return fetchOpenWeather()
      .then(weather => dispatch(receiveWeather(weather)))
      .catch(error => dispatch(fetchError(error)));
  };

export default fetchWeather;
