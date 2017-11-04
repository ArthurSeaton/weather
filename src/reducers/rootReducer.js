import {
  FETCH_ERROR,
  REQUEST_WEATHER,
  RECEIVE_WEATHER
} from '../actions/fetch';

const initialState = {
  isFetching: false,
  isError: false,
  weather: undefined
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { isFetching: true, isError: false, weather: initialState.weather };
    case RECEIVE_WEATHER:
      return { isFetching: false, isError: false, weather: action.weather };
    case FETCH_ERROR:
      return { isFetching: false, isError: true, weather: initialState.weather };
    default:
      return state;
  }
};

export default rootReducer;
