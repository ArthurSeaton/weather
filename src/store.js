import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default configureStore;
