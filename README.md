
## Weather app

This is an implementation of the weather app for Lloyds Banking Group. It was created using `create-react-app` (https://github.com/facebookincubator/create-react-app), the source is on Github (https://github.com/ArthurSeaton/weather) and the deployed app is on Heroku (https://ajs-weather.herokuapp.com).

## Installing

* Clone this Git repository
* cd into the cloned repo
* `npm install`

## Running the app locally

After installing, from the root dir:

* `npm run start`
* open a browser at `http://localhost:3000`

To run the tests after installing, from the root dir:

* `npm run test`

Note that by default Jest only runs tests that have been created since the last commit. In this case there won't be any. To run all the existing tests follow the on-screen instructions and type `a` and Jest will run all the existing tests.

To build locally, from the root dir:

* `npm run build`

Note that I never did this as I deployed the app to Heroku using the Heroku buildpack that is provided to handle apps created using `create-react-app` (See the next section).

## Location of deployed app and source code

The app was deployed onto Heroku using the buildpack at (https://github.com/mars/create-react-app-buildpack) and is available at: https://ajs-weather.herokuapp.com/.

In some cases the app does not display all the time points within a day (e.g. there are 8 in a full 24 hour day). In every case I have seen the app is displaying all the data that is being returned via the api call.

The Github repo is: https://github.com/ArthurSeaton/weather

## Future work

Due to time constraints the current app has a number of short comings. These are detailed in this section.

The code uses `Array.from` and there should be a polyfill supplied for this as `create-react-app` doesn't provide one. The fact this isn't there means the app won't work on browsers that are missing a native implementation of `Array.from`.

There should be more automated tests. Currently there are only tests for a couple of modules.

React's prop types were only used for one component. Every component should have these or an equivalent mechanism.

Currently the app displays a minimum of data and uses a minimum of styling. Future work might include adding more data from the api call to the UI and providing a better looking app. One obvious example is the UI provided when the app is fetching the weather data from the OpenWeatherMap api. It's currently just text rendered into a div. It should be something like a modal spinner especially as currently the page appears to flicker at times as the loading message is displayed quickly followed by the weather data. This is less of an issue when it takes longer (or shorter!) to fetch the data.

The way the app is currently structured can be improved upon. There are some fairly small things that could be improved such as the fact that the `components` directory is becoming fairly cluttered. Moving each component (and associated css and tests) into their own sub directory would be better.

Currently the code splits the properties of the objects retrieved via the api into rows and renders these rows. This is done to make things like the row headers (currently temperature and wind) simpler to align with the row content. However at present to add new properties to the display (e.g. cloud) changes have to be made in 2 places: the `Cell` component (which defines the mapping of component to row via the `components` array) and in the `DayForecast` component which provides similar mappings via the `properties` and `headers` arrays. These mappings should be brought together into one place so that adding new properties to the UI or changing the order of existing rows becomes simpler and less error prone.

Currently the OpenWeatherMap api is accessed without any attempt to rate limit. Information in the OpenWeatherMap docs indicates that the client is expected to rate limit and cache requests. This could be done fairly simply by throttling the function that access the api (`fetchWeather`) using something like Lodash's `throttle` (`leading: true, trailing: false`). It's not worth doing this right now as the only way of invoking the api is to reload the page. If the UI provided a way to fetch the weather data this should throttle the api requests.

Another possibility is for the front end to request data from a server component which in turn invokes the OpenWeatherMap api. In this case the server component would provide the rate limiting. Another advantage of this approach would be that the API key is no longer held on the browser which would be more secure.

The app is currently aimed at desktop rather than mobile. It will work on a phone (I tried on my Android phone) and it's just about ok in landscape but not in portrait. Work should be done to improve the experience on a mobile device. Not rendering the textual description of the weather and instead relying on the icons is one possibility. Using the shorter textual description that seems to be available in an associated property (`weather.main` as opposed to `weather.description`) is another. For mobile it might be worth considering moving off the tab based interface and using something more mobile friendly like a carousel.
