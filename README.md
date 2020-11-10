# Spotifood

## Project overview

### Spotify authorization approach

Based on the docs available on https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow I used the Implicit Grant flow. This flow requests the user permissions before using the Spotifood app. The permission lasts for 1 hour and then the app will ask again.

I stored the token on sessionStorage on purpose, so every new tab open will ask for permissions again. When the user denies the permissions, or any other error occurs, a custom message is displayed on the landing page on top of the default message.

Axios interceptors were used to send the user token on every request as well as handling expired tokens (401 http code).

For testing/demo purposes I set the `show_dialog` option to true when calling Spotify authorization API. This means that every time a user opens the app, the permissions will be asked no matter if the user already allowed them. To change this behaviour you can go to `src/services/api.js` and set `show_dialog` param to false.

### Routing

Custom route components were used to prevent user from accessing specific pages depending on the login state.

### Filters behaviour

Every time you change some filter, a request will be fired 250ms after the action to search the playlists based on the filters values. There is no need to press a search button.

On mobile devices there is a button to hide/expand the filters section to make it easier for the user to see the playlists without scrolling all the time.

### Changing app language

You may pick a language by clicking one of the buttons on the top right corner of the app. This can be done everywhere. The last picked language will be saved on localStorage and remembered.

### SCSS patterns

I picked 7-1 pattern to organize the SASS files (https://gist.github.com/rveitch/84cea9650092119527bc).
I also used BEM notation as a methodology to organise my CSS class names and avoid a complex CSS precedence mess (http://getbem.com/introduction/).

### Responsiveness approach

I mostly wrote custom CSS for the app. I used SASS mixins to handle breakpoints more easily in order to achieve responsiveness for all platforms.

### UI choices

I tried to unite iFood and Spotify UI in this app. I even made some simple but creative app logo. The idea of the logo is using the ifood logo arrow as a headphone piece. There is an animation that runs when the playlist cards render on the page. There is a simple animation on the landing page (ask permission page), that tries to imitate a person listening to a song, when hovering the app logo.

### Testing

I didn't do any unit test because I had an issued configuring `react-testing-library` and decided not to spend my time with this since I have already worked with `Enzyme` and `react-testing-library` in the past.

### Extras

When clicking on one of the playlist cards on the explore/search page, you will be redirected to the playlist details page. This page shows some important info about the playlist, a list of tracks and a button that opens the playlist on Spotify.com on another tab.

### Main dependencies used and why

- **Axios**: easier http requests
- **classnames** : dinamic css classes on html elements
- **react-intl**: internationalization (pt and en)
- **baseui**: good UI modular components. I mostly used the inputs for the filters section

### Desktop screenshots

![alt text](https://github.com/leonimurilo/ifood-frontend-test/blob/master/github-images/landing.png?raw=true)

---

# iFood Frontend Test

Create a web application called Spotifood used to display the preferred playlists from iFood's customers. The web application has only one page:

- A page that lists the featured playlists at Spotify according to some criteria.

## Business rules

- The page is composed of two components:
  - One list of featured playlists
  - One filter component with API filter fields and one local search text input to filter the playlists by "name".
- The filter component should be used to filter the elements displayed by the list of featured playlists.
- The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (http://www.mocky.io/v2/5a25fade2e0000213aa90776)
- The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (https://developer.spotify.com/web-api/get-list-featured-playlists/)
- Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
- Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## Hints or Constraints

We will use one API from Spotify Web API. You should follow the Spotify guide in order to create a token needed to access Spotify's API.
To mount the API filter fields on the filter component, you **must** consume the API that provides the metadata about the fields (Link 1).
You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution. We will not provide any UI prototype or design.

## Non functional requirements

As this application will be a worldwide success, it must be prepared to be accessible, responsive, fault tolerant and resilient.
We **strongly recommend** using React to build the application.
Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks.
Fork this repository and submit your code.
