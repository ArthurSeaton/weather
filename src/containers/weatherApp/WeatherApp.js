import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from '../../components/Weather';
import fetchWeather from '../../actions/fetch';

class WeatherApp extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWeather());
  }

  renderError() {
    return (
      <div>There was an error loading the weather forecast</div>
    );
  }

  renderLoading() {
    return (
      <div>Loading the weather forecast...</div>
    );
  }

  renderWeather() {
    const { weather } = this.props;
    return weather && (<Weather weather={weather} />);
  }

  render() {
    const { isError, isFetching, weather } = this.props;
    return (
      <div>
        { isError && this.renderLoadingError() }
        { isFetching && this.renderLoading() }
        { !isError && !isFetching && this.renderWeather(weather) }
      </div>
    );
  }
}

const mapStateToProps = ({ isError, isFetching, weather }) => ({
  isError,
  isFetching,
  weather
});

export default connect(mapStateToProps)(WeatherApp);
