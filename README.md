# SPOTIFOOD

All your favorite music inside one app.<br>
Listen to comfy music while eating ♪

Demo can be acessed here: [capeleto-spotifood](https://capeleto-spotifood.netlify.app)

This project was created using [create-react-app](https://github.com/facebook/create-react-app)

## Available scripts

`npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

`npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>

[You can read more about testing here](https://facebook.github.io/create-react-app/docs/running-tests)

`npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the filenames include the hashes.<br>

## Technologies

- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- Material UI
  - [Core](https://material-ui.com/)
  - [Picker](https://material-ui-pickers.dev/)
  - [Icons](https://material-ui.com/components/icons/#icons)
- [date-fns](https://date-fns.org/)
- [@date-io](https://github.com/dmtrKovalenko/date-io)
  - date-fns
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Chai](https://www.chaijs.com/)
- [EsLint config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/)

## Variables

You should configure your own variables.

##### if you want to create more variables check [here](https://create-react-app.dev/docs/adding-custom-environment-variables/)

`REACT_APP_SPOTIFY_ID`

Spotify app public client id, you can create one following this [guide](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app)

`REACT_APP_REDIRECT_URL`

You must specify which redirect url spotify can use, to set up it you can follow this [guide](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app)

## To be implemented

- I18N
- L10N
- Session controller
- More tests
