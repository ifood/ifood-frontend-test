![Spotifood CI](https://github.com/willanysilva/ifood-frontend-test/workflows/Spotifood%20CI/badge.svg)

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

# solution

This app is made with react-create-app, the node version is `v12.16.3` and the npm version is `6.14.4`. I'm using react hooks and react context to share the app state between the components, I created separeted contexts from state and dispatch because I think its better to understand whats going on :D I also used styled components because we can handle rendering logic of styles with it.

## Accessibility

I'm using a few aria tags as `aria-live`, `aria-role` and `aria-label` to provider a better experience for people with desability, also all images has the alt attribute and the color of the app has a good contrast.

## Libs

- axios
- moment
- styled-components

## Tests

I wrote some tests using the [React test library](https://testing-library.com/)

## CI

I configured a workflow that has a few jobs:

- Checkout of code
- Install dependecies
- Run the lit
- Run the tests
- Creates the build

## Run it locally

```
# git clone https://github.com/willanysilva/ifood-frontend-test.git

# cd ifood-frontend-test

# yarn

# yarn start
```

## Demo

This app is deployed and available, to check it click [here](https://willany-spotifood.herokuapp.com/)
