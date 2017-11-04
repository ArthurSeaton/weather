const handleResponse = (response) => {
  const { status, statusText } = response;
  if (statusText !== 'OK') {
    throw new Error(`Fetch failed: ${status} ${statusText}`);
  }
  return response.json();
};

const fetchWeather = () => {
  const {
    REACT_APP_OPEN_WEATHERMAP_API_URL: apiUrl,
    REACT_APP_OPEN_WEATHERMAP_API_KEY: apiKey,
    REACT_APP_OPEN_WEATHERMAP_API_UNITS: units,
    REACT_APP_OPEN_WEATHERMAP_API_CITY_ID: city
  } = process.env;
  const url = `${apiUrl}?id=${city}&units=${units}&APPID=${apiKey}`;
  return fetch(url)
    .then(handleResponse);
};

export default fetchWeather;
