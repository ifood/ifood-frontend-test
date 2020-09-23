<h1 align="center">
  <a href="#">
    <img src="https://demo.pointec.dev/ifood/spotifood/spotifood-banner.png" alt="Spotifood ouça músicas com nossos FoodLovers" />
  </a>
</h1>

# iFood Frontend Test

Project developed for iFood FoodLovers. In the project you can view a list of songs in highlights, search by name and use the filter to search.

# Table of contents

- [Feature](#Features)
- [Web Application](#web-application)
  - [Desktop](#Desktop)
  - [Mobile](#Mobile)
- [Development Language](#development-language)
- [Architecture](#Architecture)
- [Dependencies](#Dependencies)
- [Development dependencies](#Development-dependencies)
- [Getting Started](#Getting-Started)
- [Starting the web application](#Starting-the-web-application)

# Features

- Search for name
- Featured music list
- Filters

# Web application

Initially the project has only one page.

The homepage has a header with a filter to change the featured songs, a search bar and featured music listing.

The application is fully responsive and mobile.

Client Credentials Flow was used to log into the API, keeping your token on local storage.

I kept the credentials to facilitate the start of the project.

- You can see the result [here](https://demo.pointec.dev/ifood/spotifood)

## Desktop

<p align="center">
  <a href="#" target="_blank">
    <img width="90%" src="https://demo.pointec.dev/ifood/spotifood/spotifood-tela-home.JPG" alt="Home screen of the Spotifood project in the desktop version" />
  </a>

</p>

## Mobile

<p align="center">
  <a href="#" target="_blank">
    <img width="30%" src="https://demo.pointec.dev/ifood/spotifood/spotifood-tela-home-mobile.JPG" alt="Home screen of the Spotifood project in the mobile version" />
  </a>
</p>

# Development language

Project made with ReactJS.

The architecture and components are below.

# Architecture

The architecture of the files followed the standards the:

```bash
Spotifood
├── docs/
│   ├── README.md
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   └── icons/
│   │       └── loader.svg
│   │   └── images
│   │       └── FoodLovers.js
│   │       └── man-cell-music.png
│   │       └── woman-dress-cell-music.png
│   │       └── woman-sweatshirt-blue-cell-music.png
│   │       └── woman-sweatshirt-cell-music.png
│   │   └── styles
│   │       └── GlobalStyles.js
│   ├── components/
│   │   └── Bootstrap/
│   │       └── index.js
│   │   └── Filters/
│   │       └── index.js
│   │       └── styles.css
│   │       └── styles.js
│   │   └── Fontawesome/
│   │       └── index.js
│   │   └── FoodLovers/
│   │       └── index.js
│   │       └── styles.js
│   │   └── Footer/
│   │       └── index.js
│   │       └── styles.js
│   │   └── Header/
│   │       └── index.js
│   │       └── styles.js
│   │   └── Input/
│   │       └── index.js
│   │   └── Loading/
│   │       └── index.js
│   │       └── styles.js
│   │   └── Logo/
│   │       └── index.js
│   │       └── styles.js
│   │   └── LogoIfood/
│   │       └── index.js
│   │       └── styles.js
│   │   └── MusicCardList/
│   │       └── index.js
│   │       └── styles.js
│   │   └── Search/
│   │       └── index.js
│   │       └── styles.js
│   │   └── Select/
│   │       └── index.js
│   ├── config/
│   │   └── index.js
│   ├── contexts/
│   │   └── index.js
│   ├── pages/
│   │   └── Home/
│   │       └── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   │   └── auth.js
│   ├── utils/
│   │   └── index.js
│   ├── App.js
│   └── index.js
├── .editorconfig
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── config-overrides.js
├── jsconfig.js
├── package.json
├── README.md
└── yarn.lock
```

# Dependencies

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [react-dom](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [react-scripts](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Datepicker](https://reactdatepicker.com/)
- [React Select](https://react-select.com/)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Axios](https://github.com/axios/axios)
- [Moment](https://momentjs.com/)
- [query-string](https://www.npmjs.com/package/query-string)
- [@unform/core](https://unform.dev/)
- [@unform/web](https://unform.dev/)
- [Fortawesome Core](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- [Fortawesome Regular svg icons](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- [Fortawesome Solid svg icons](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- [Fortawesome React fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

# Development dependencies

- [Babel Eslint](https://github.com/babel/babel-eslint)
- [Babel plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
- [Babel plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)
- [customize-cra](https://www.npmjs.com/package/customize-cra)
- [ESLint](https://eslint.org/)
  - [Eslint config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [Eslint import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import)
  - [Eslint plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [Eslint plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)
  - [Eslint plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [Eslint plugin-node](https://github.com/mysticatea/eslint-plugin-node)
  - [Eslint plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  - [Eslint plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [Eslint plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [React app rewired](https://www.npmjs.com/package/react-app-rewired)
- [Prettier](https://prettier.io/)

# Getting Started

Download the project directly from GitHub or using the command:

```bash
# Clone repository
$ git@github.com:paesrafael/spotifood.git

# Or using the CLI of GitHub
$ gh repo clone paesrafael/spotifood

# Access the project folder
$ cd spotifood

# Install the dependencies
# At the root of the project use NPM or YARN to install

# Using YARN
$ yarn install

# Using NPM
$ npm install
```

# Starting the web application

To start, use the commands:

```bash
# Using YARN
yarn start

# Using NPM
npm start

# Access the application at https://localhost:3000
```

# Author

Spotifood developed by [Rafael Paes](https://github.com/paesrafael/spotifood)

Hey, my English is rusty, and basic.
