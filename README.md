# Spotifood
This is a React project for iFood Frontend Test

## Aplication
The application consists of showing the featured playlists of Spotify through some optional filters.

* Every 30 seconds updates the page to keep the information updated on the user's screen;
* Has responsive behavior to use the application through filter fields, updating the list whenever the user changes some value;
* Authentication in spotify to receive a token that is used in the search of the playlists.

## Tools used in the project

* React 16 (Javascript library)
* Axios (Library for APIs consumption)
* Jest and Enzime (Unit tests of the components.)
* Material UI (Visual framework for greater agility in the development of the interface)
* React prop-types (Check component types for components, good for guiding development if we are passing some kind of improper on the props)

## Structure of the project

The overall structure of the project is as follows:

* /components (Ehere the components are)
* /components/filter (Component responsible for filter fields)
* /components/playlist (Component responsible for creating a playlist and displaying your information)
* /components/playlist-counter (Component responsible for showing the number of playlists being displayed)
* /components/render-field (Component responsible for rendering filter fields)
* /components/select-renderer (Component responsible for building a select element)
* /components/total-tracks (Component responsible for counting the total of tracks from all playlists being displayed)
* /images (Component containing the main logo image)
* constants.js (Where the constants used in the app are separated)
* App.js (Application main class)
* test classes (These are the classes that contain the unit tests)

## Technical solutions

Initially, the construction of the project was done based on the create-react-app for offering greater agility to start a react project.

To authenticate, I created a pure Javascript component that receives the location and history objects to read the token returned by Spotify (through window.location.hash), save it to the localStorage, and redirect the user to the list of playlists.

The Spotify CLIENT_ID was not committed in Git due to security and instead of leaving it exposed in the project code, I put it in the Heroku environment variable and the application takes the client id directly from there (through process.env), so the only machine that has access to the client id is the machine that is deploying the site.

After login to Spotify, the user will have access to all Featured Playlists (on the Spotify player's 'Browse' tab), since the filters have not been changed until then.
In addition to playlists, the filter fields and values ​​are dynamically mounted, all those fields and values ​​are consumed through an API (Offered by the utterance), and as the site receives those values, the filter is created.

Each time the user changes some filter value, a new request is made to the Spotify API to filter with these values ​​changed by the user and are passed by parameter to the API. After this request, the site receives a new list and updates that list for the user.

In addition to filter fields, the user can filter by the playlist name, but this filter is not made a new request for the API, a search is done locally in the current list that is being displayed on the client.

Filter information and the playlist are stored in the State, so we can work with these values ​​dynamically.

There is also an interval of 30 seconds, after that time, a new request is made to the Spotify API with the current filter data to get a new list, if it is different from the current one.

All information that is passed from one component to another is passed through props.

The application is usually broken in components, because it is easier to maintain and we can isolate the responsibility of each component in the project.

The deploy of the application was done in Heroku (https://heroku.com), because it is possible to access the application from any part of the world.

## How to access the application

To access the application, enter this link: https://spotifood-raphael.herokuapp.com

If you wish to run the application in your local machine, replace the constant URL_HEROKU (App.js) to URL_LOCALHOST (Remember to import this constant in App.js). This will redirect the application to http://localhost:3000.

Additionally, write the below commands in your terminal (replacing XXXX with your acutal client id from the page where you registered your application).

Windows: SET REACT_APP_SPOTIFY_CLIENT_ID=XXXX
Linux: export REACT_APP_SPOTIFY_CLIENT_ID=XXXX
npm start

## Tests

For unit tests, Jest was used (already installed in the package of the create-react-app) along with enzyme.
All tests are within the test classes.

## Future Improvements

Here are some possible improvements for the future:

* Use the redux to save filter states and also to transmit data between components;
* Use the React Router to create the application routes, making a login page and then routing to the main page of the application;
* Make filter fields even more dynamic and not working with switch. Try to build filters based entirely on API return.
