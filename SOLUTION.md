# Access [Spotifood](https://spotifood.douglasselias.vercel.app) ↗ (Also works in IE 😱)

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupery

## Technologies used:

### [TypeScript](https://www.typescriptlang.org)

A JavaScript _superset_ that adds static typing, thereby improving the development experience by notifying you of errors and what types of arguments a function accepts.

### [React](https://reactjs.org)

**Required for the challenge**

React is currently one of the most popular frameworks for web development. Facilitates synchronization between the state of the application and the user interface.

### [Next.js](https://nextjs.org)

Framework for React that hides the complexity of configuring a React project from scratch and still provides a good folder structure.

### [Ant Design](https://ant.design)

Beautiful and easy to use components.

### [Jest](https://jestjs.io)

Simple and powerful framework for automated testing.

### [Lodash Debounce](https://lodash.com/docs/4.17.15#debounce)

A function to postpone the execution of a function, especially useful in search fields that make a request on the server.

### [Vercel](https://vercel.com)

Simple and fast hosting for websites.

## Folder structure

### `/pages`

Mandatory folder for Next.js. It contains the home page (`index.tsx`) and two other files to configure the `head` tag.

`index.tsx` has the main application state. It takes care of checking the logged in user and renders the login or playlists.

### `/components`

`FeaturedPlaylists.tsx` receives an _array_ of playlists to display the name, description and cover image. Clicking on the name opens a new tab in Spotify with the selected playlist.

`FilterPlaylists.tsx` contains all logic for filtering playlists. Use `useReducer` to control the state of the filter fields.

Make use of `debounce` when requesting playlists with waiting time based on [Doherty Threshold](https://lawsofux.com/doherty-threshold).

Extract the access token from the url and avoid making requests that change the state of the application if you don't have the token, thus preventing a memory leak. For 30-second interval requests, it was necessary to use `useRef` to store the id of `setInterval`, enabling the cancellation of the outdated request when changing a filter field.

`InvaliTokenAlert.tsx` displays an alert for the user to login to Spotify.

`LoginSpotify.tsx` displays a link for the user to login to Spotify. It also takes care of checking the application's environment to redirect to the correct url.

`SpotifoodLogo.tsx` logo made by me on [Inkscape](https://inkscape.org), using a mix of Spotify and iFood logos.

### `/data`

`fetchURL.ts` wraps the `fetch` method and does a simple error handling of code 400 and 401.

`playlistFilter.ts` contains the method for requesting the values ​​of the filters and methods for transforming these values ​​to be displayed in the interface. It also applies a _patch_ to [country value.](https://github.com/ifood/ifood-frontend-test/issues/18)

`playlists.ts` contains the method for requesting playlists and a method for filtering playlists by name.

### `/utils`

All files in this folder contain tests.

`accessToken.ts` contains the method that extracts the access token from a url.

`queryParams.ts` contains the method that turns an object into _query string_ to be used in the url.

`timestamp.ts` contains two methods for handling the date and time values ​​of the interface and turning it into _timestamp_ for requesting playlists.

### `/.github`

`main.yml` Github Actions configuration. Run the tests by making a _push_ on the master or by doing a _merge_ on the master.

## Run the code

- Clone the repository.
- Execute `npm i` para instalar as dependências.
- Run `npm i` to install the dependencies.
- Open this url in the browser: http://localhost:3000
- Optional: Run `npm test` to see the tests
