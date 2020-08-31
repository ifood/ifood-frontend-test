# Spotifood

This application was developed in response to the test for the frontend developer position at ifood.

The requirements are described in [ifood-frontend-test](https://github.com/ifood/ifood-frontend-test).

## Acessibility

As a way to make the site more accessible, the following features were implemented:

- [VLibras](https://www.vlibras.gov.br/), a plugin for translating the page into Libras;
- Dark Mode;
- Change font size;

## Runnig Application

- ```yarn install```, to install dependencies;
- ```yarn start```, to run app;
- ```yarn build```, to run build for deploy application;

## Architecture

This app was developed with React Functional components with React Hooks.

For structures was used:

- **ReactJs**, lib frontend for develop application;
- **SASS**, to create styles;
- **Redux**, to manage the state of the application;
- **React Hooks**, to manage the life cycle of components;
- **React Router DOM**, to manage routers;
- **React Router Redux**, to manage state of routers;
- **Semantic UI React**, lib of frontend components; 
- **Axios**, to fetch routes with promises; 

## Folder Structure
The folder structure is defined from the src folder which is the baseUrl.

```
src
  ├ api
  | └ index.js
  ├ components
  | ├ Filters
  | |   ├ index.js 
  | |   └ index.scss
  | ├ List
  | |   ├ Card
  | |   |   ├ index.js 
  | |   |   └ index.scss
  | |   ├ index.js 
  | |   └ index.scss
  | ├ NotFounded
  | |   ├ index.js 
  | |   └ index.scss
  | ├ App.js
  | └ App.scss
  ├ redux
  | ├ actions
  | |   └ playlists.action.js
  | ├ reducers
  | |   ├ index.js 
  | |   └ playlists.reducer.js
  | └ store.js
  ├ utils
  | ├ index.js
  | └ regex.js
  └ index.js
```

## Problems found

When using Spotify's WEB-API I had problems with the return of locale and limit filters. I tried to use different types of authentication to solve it, but apparently the problem is with the API.

- ```locale``` does not return different objects in the request;
- ```limit``` does not return more than 10 elements in the request;

