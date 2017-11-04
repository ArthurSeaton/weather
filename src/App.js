import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import WeatherApp from './containers/weatherApp/WeatherApp';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <WeatherApp />
        </Provider>
      </div>
    );
  }
}

export default App;
