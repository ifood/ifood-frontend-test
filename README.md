# Spotifood

Is a React Web Application to display the preferred playlists from iFood's customers.

It is integrated with the newest libraries such as:

- React
- React Hooks
- Redux
- Redux saga
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack
- styled components
- material UI
- Formik
- Yup

[**Access the Spotifood APP Demonstration**](https://spotifood-pleaobraga.herokuapp.com/)

[**Access the Project UI Documentation**](https://pleaobraga.github.io/spotifood/?path=/story/components-molecule-card--default)

![alt text](https://github.com/pleaobraga/spotifood/blob/master/github-images/desktop.png)

![alt text](https://github.com/pleaobraga/spotifood/blob/master/github-images/mobile.png)

# Quick Start

Check your node version, this project needs the node version >= 12 and yarn >= 1.22.0 otherwise you terminal will console an error

## Installing dependencies

```
yarn
```

## Starting the project

To start the project use this command in your terminal and wait for a few seconds and the project will open a new tab in your browser automatically using port 8080

```
yarn start
```

### Test all project

```
yarn test
```

## Run UI documentation locally (Storybook)

To start the Storybook use the command, it will open a new webpage with Storybook running on port 9000

```
yarn storybook
```

# Project development

This project is was build from [**React Scaffold**](https://github.com/pleaobraga/react-scaffold) an open souce project created by myself which helps you to create a react project from scratch and that project does not create-react-app, I set everything up from zero.

To achieve the test requirements I chose to use Redux-saga to help with the race condition and the lib date-fns to deal with the date format because it has the most closer patter to deal with the date pattern provided by the API.

The App creates all fields and its validations in execution time. using the Filter api to provide all those two informations.

To deal with form and its validations it was used by Formik and Yup to take care of it.

TO help the UI it was used Material UI and Styled components

For the test Jest and Enzyme

For the documentation Storybook and PropTypes

## Optimizations

To reduce the numbers of the API request it used the debounce approach with 250ms in every field that makes a request when its value changes.

A new request will only make if the fields change between this 250ms, if an user typed "1", then erase, then type "1" again in this 250ms time the APP will not make a new request because the current filter is already the same as the new one.

If the api returned an error the automatic update will not be trigger until the api start tu return 200 again

# Project architecture

The project architecture was designed using **SOLID** principles

The project was designed to support new features and pages in the future

The project folder structure

```
src
├── api
├── components
│   ├── Atom
│   └── Molecule
│   └── Organism
│   └── UILess
├── pages
├── redux
│   ├── actions
│   └── reducer
│   └── sagas
├── service
├── utils
```

## Components

The components were created based on atomic design and each component has that structure

```
Component
├── Component.jsx
├── Component.test.js
├── Component.styles.js
├── index.js
```

Due **SOLID** principle some components like _Filter_ and _PlaylistCard_ do not consume data directly from redux ( using the useSelector), but from props (from father to children), to let them be more reusable, to support new pages and new features in the future.

## Redux

As we are using 2 different apis I created 2 differents reducers and its ecosystems Filter and Playlist to deal with them

As I said before the redux saga was chosen because it can handle well with race conditions and in this app that can happen.

## Auth

To deal with the authentication I used an API from Spotify to get the token, I stored it in the LocalStorage to avoid make unnecessary requests.

## Tests

It was written Unit tests with more than 80% coverage
![alt text](https://github.com/pleaobraga/spotifood/blob/master/github-images/testCoverage.png)
