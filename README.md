# Spotifood

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b5ee843-2be2-4ce3-b444-f378f8b44610/deploy-status)](https://app.netlify.com/sites/spotifood-vncsrbro/deploys)

# Live Version

- [Spotifood](https://spotifood-vncsrbro.netlify.app/)

# Running the project

- `git clone https://github.com/vncsrbro/ifood-frontend-test.git`
- `cd ifood-frontend-test`
- `yarn install && yarn start`

## Credentials

To run the application locally you must provide a Spotify Client ID, you also need to set the ID as an env variable in .env file.

`/.env` <br />
`REACT_APP_SPOTIFY_CLIENTE_ID={YOUR_CLIENT_ID}`

# Testing

- `yarn test` to run available tests

# Main Technologies

- React
- Redux
- Axios
- styled-components
- styled-media-queries
- Testing Library
- prop-types

## Folder Structure

```sh
├── README.md
│
└── src
    ├── components/ # Presentational components
    │
    │
    ├── constants/
    │   ├── config/ # Application config
    │   ├── data/ # Static data
    │   └── styles # Global styles, colors, typography.
    │
    ├── containers/ # Containers components. Learn more at: https://redux.js.org/basics/usage-with-react#presentational-and-container-components
    │
    ├── helpers/ # Helpers functions
    │
    ├── hooks/ # Custom React Hooks
    │
    ├── pages/ #  Pages  interfaces
    │
    ├── routes/ #  React-router-dom routes
    │
    ├── services/ #  Services that get data from external resources
    │
    ├── store/
    │   ├── modules/ # Folder with all actions and reducers, separated by modules.
    │   │   └── rootReducer.js # File to group all reducers.
    │   └── index.js # Main file to setup createStore.
```
