# iFood Frontend Test

# How to run

$ yarn (or npm install) \
$ yarn start (or npm run start)

# How to run tests

\$ yarn test (or npm test)

# Environment Variables

- To run the application locally, you must provide a Spotify Client ID and Client Secret, the values ​​are added to the .env file.

```
REACT_APP_CLIENT_ID={YOUR_CLIENT_ID}
REACT_APP_CLIENT_SECRET={YOUR_CLIENT_SECRET}
```

# Libraries

- react-hook-form
- redux-mock-store
- react-redux
- react-router-dom
- react-scripts
- redux:
- reduxsauce
- styled-components
- redux-thunk

# Project Structure

```bash
📦src
┣ 📂**tests**: All tests here (components, presentation etc)
┣ 📂assets: All assets here (jpg, png, svg etc)
┣ 📂components: All functional components here, without business rules
┃ ┣ 📂core: Components that are used in multiple places of the application
┃ ┗ 📂presentation: Presentations that are used by Containers components
┣ 📂containers: Containers components (responsible for handling business rules for presentations)
┣ 📂helpers: Application helpers like sanitize, format strings and params, array methods etc.
┣ 📂routes: Routes Privates and Publics configurations
┣ 📂services: Axios API services
┣ 📂store: Redux store configurations
┃ ┣ 📂ducks: All reducers
┃ ┣ 📂sagas: All redux-sagas
┣ 📂utils: Constants, mocks, schemas, masks and auth
┃ ┣ 📂constants: Constants all texts and dictionaries that cannot be put into locales folder
┣ 📂globalStyle: Global style
┃ ┣ 📂globalStyle: CSS resets, vars and global styles (All css variables here inside :root)
┗ 📜index.js:
┗ 📜App.js:
```

# Stack

- ReactJS

# Author

- Raiane Christine: raianechristine@outlook.com
