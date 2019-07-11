# SpotiFood

Live demo: http://spotifood-pg.surge.sh

## Architeture details

The goal here was to create an app that could authenticate on Spotify and then being able to return the list of preferred playlists according to some criteria. To achieve this, I have used React v16.8 with React-Redux v7 and Redux-Saga to handle side effects.

Talking about Redux, i have used the Duck Pattern with reduxsauce. It allows me to keep actions and reducers in the same file, which helps a lot on maintenance and organization.

To deal with tests, i have used jest + enzyme. In order to check if my bundle was too big, i have configured an plugin called craco (Create React App Configuration Override) to add webpack-bundle-analyzer. With that plugin, i don't have to eject to add some webpack custom configs.

All http requests were handled by axios and styles by styled-components with a great way to deal with responsiveness as presented in 'assets/styles/global.js' file. Material-ui was the design framework choosed because of my familiarity with him.

All components have their props set up with PropTypes and eslint was configured with airbnb-configs to keep it organized and structured. Other great point to help on organization was the strategy to use absolute paths instead of relative ones.

Sensitive information (Spotify clientId and redirect url) were saved inside .env files set up with env-cmd lib.

To start web development:

`$ yarn start or npm start`

To build bundle:

`$ yarn build or npm run build`

To run tests:

`$ yarn test or npm run test`

To analyze bundle:

`$ yarn analyze or npm run analyze`