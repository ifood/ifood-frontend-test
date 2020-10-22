### To install application's dependencies:

```yarn``` or ```npm install```

### Spotify Client Id and Secret

Rename your `.env.example` to `.env` and set the variables values

```
REACT_APP_CLIENT_ID=your-client-id
REACT_APP_CLIENT_SECRET=your-client-secret
```

### To run application:

```yarn start```

### To run tests:

```yarn test```

### Lint

```yarn lint``` or ```yarn lint --fix```

### Technologies used:

* Javascript
* React
* Redux
* Redux-Thunk
* Material-UI
* axios


### Folders Tree structure:

````
src
├── api
│   ├── filters
│   │   ├── filters.js
│   │   └── index.js
│   └── spotify
│       ├── auth.js
│       ├── helpers
│       │   ├── buildParams.js
│       │   └── index.js
│       ├── index.js
│       └── playlist.js
├── commonsComponents
│   ├── boxContainer
│   │   ├── boxContainer.js
│   │   └── index.js
│   ├── index.js
│   ├── loading
│   │   ├── Loading.js
│   │   └── index.js
│   └── navbar
│       ├── index.js
│       └── navbar.js
├── index.js
├── main.css
├── modules
│   ├── filter
│   │   ├── components
│   │   │   ├── SelectInput.js
│   │   │   ├── SliderInput.js
│   │   │   ├── TimeInput.js
│   │   │   └── index.js
│   │   ├── enum
│   │   │   ├── filters.js
│   │   │   └── index.js
│   │   ├── filter.js
│   │   ├── helpers
│   │   │   ├── __tests__
│   │   │   │   ├── handleCountryError.test.js
│   │   │   │   └── toISOString.test.js
│   │   │   ├── handleCountryError.js
│   │   │   └── toISOString.js
│   │   └── index.js
│   └── playlist
│       ├── components
│       │   ├── PlaylistCard.js
│       │   ├── SearchByNameInput.js
│       │   └── index.js
│       ├── index.js
│       └── playlist.js
├── page
│   └── featuredPlaylists
│       ├── container.js
│       └── featuredPlaylists.js
├── redux
│   ├── actions
│   │   ├── filter
│   │   │   ├── __tests__
│   │   │   │   └── getFiltersAction.test.js
│   │   │   ├── filter.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── mock
│   │   │   ├── filtersMock.js
│   │   │   └── playlistsMock.js
│   │   ├── playlist
│   │   │   ├── __test__
│   │   │   │   └── getPlaylists.test.js
│   │   │   ├── index.js
│   │   │   └── playlist.js
│   │   └── types.js
│   └── reducers
│       ├── filter.js
│       ├── index.js
│       └── playlist.js
├── serviceWorker.js
└── setupTests.js
````
