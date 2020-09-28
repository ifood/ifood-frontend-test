# Spotifdood.

This project was part of the selection process for front-end developer at Ifood

# Table of contents

- [Development Language](#development-language)
- [Architecture Folder](#architecture-folder)
- [Dependencies](#dependencies)
- [Development dependencies](#development-dependencies)
- [Getting Started](#getting-Started)
- [Starting the web application](#starting-the-web-application)
- [Things I wish I had done](#things-i-wish-i-had-done)

# Development language

The project was developed using the ReactJS library with Typescript.

# Architecture Folder

Below is a drawing of how the structure was developed.

```bash
Spotifood
├── .docker/
│   ├── nginx
|       └── nginx.conf
│   ├── node
|       └── Dockerfile
├── public/
│   ├── index.html
│   ├── favico.ico
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── svg/
|   |           └── spotifood_logo.svg
|   |           └── spotifood_logo_aside_red.svg
|   |           └── spotifood_logo_aside_white.svg
|   |           └── spotifood_logo_with_name.svg
│   ├── components/
│   │   └── FullscreenLoader/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── inputs/
│   │       └── DatePickerInput/
|   |           └── index.tsx
│   │       └── SelectInput/
|   |           └── index.tsx
│   │       └── TextInput/
|   |           └── index.tsx
│   │   └── Layout/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── Sidebar/
│   │       └── components/
|   |           └── FilterInput
|   |               └── FilterInput.test.tsx
|   |               └── index.tsx
│   ├── config/
│   │    └── index.ts
│   ├── hooks/
│   │   └── useAuthentication/
|   |       └── index.ts
│   │   └── useFilters/
|   |       └── index.ts
│   │   └── usePlaylists/
|   |       └── index.ts
│   │   └── useSpotifyAccountUrl/
|   |       └── index.ts
│   │   └── useUserInfo/
|   |       └── index.ts
│   ├── interfaces/
│   │   └── Auth/
|   |       └── index.ts
│   │   └── Filter/
|   |       └── index.ts
│   │   └── Playlist/
|   |       └── index.ts
│   │   └── Token/
|   |       └── index.ts
│   │   └── User/
|   |       └── index.ts
│   │   └── index.ts/
│   ├── pages/
│   │   └── Login/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── Playlist/
│   │       └── components/
|   |           └── PlaylistCard
|   |               └── index.tsx
|   |               └── styles.ts
|   |           └── PlaylistInput
|   |               └── index.tsx
|   |               └── styles.ts
|   |           └── PlaylistList
|   |               └── index.tsx
│   │       └── index.tsx
│   ├── providers/
│   │   └── AuthProvider/
│   │       └── index.tsx
│   │   └── FiltersProvider/
│   │       └── index.tsx
│   │   └── PlaylistProvider/
│   │       └── index.tsx
│   │   └── index.tsx
│   ├── routes/
│   │   └── index.ts
│   ├── services/
│   │   └── AuthService/
│   │       └── index.tsx
│   │   └── FilterService/
│   │       └── index.tsx
│   │   └── HttpService/
│   │       └── index.tsx
│   │   └── PlaylistService/
│   │       └── index.tsx
│   │   └── StorageService/
│   │       └── index.tsx
│   │   └── UserService/
│   │       └── index.tsx
│   ├── styles/
│   │   └── Background/
│   │       └── index.ts
│   │   └── Buttom/
│   │       └── index.ts
│   │   └── Link/
│   │       └── index.ts
│   │   └── Loader/
│   │       └── index.ts
│   │   └── index.ts
│   ├── theme/
│   │   └── globalStyles.ts/
│   │   └── theme.ts/
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
├── .dockerignore
├── .editorconfig
├── .env.example
├── .gitignore
├── docker-compose.yml
├── netify.toml
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock
└── yarn.lock
```

# Dependencies

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Material UI](https://material-ui.com/pt/)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Axios](https://github.com/axios/axios)
- [Moment](https://momentjs.com/)
- [Notistack](https://iamhosseindhv.com/notistack)
- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)

# Development dependencies

- [Enzyme](https://github.com/enzymejs/enzyme)
- [React Test Renderer](https://pt-br.reactjs.org/docs/test-renderer.html)

# Getting Started

After cloning the project, run the command, at the root of the project.

```console
cp .env.example .env
```

Inside the .env file you just generated there are two properties with empty fields.

> REACT_APP_SPOTIFY_CLIENT_ID=
  REACT_APP_SPOTIFY_CLIENT_SECRET=

Insert the client_id and client_secret of your spotify application.

Example:

> REACT_APP_SPOTIFY_CLIENT_ID=838bdb488eb442f09cca8bd4c2fab061
  REACT_APP_SPOTIFY_CLIENT_SECRET=8d487cd2f8b6483383773136a062bf79

# Starting the web application

There are two ways to upload the project, with Docker and without Docker;

### With Docker

```bash
# Inside terminal run
docker-compose up

```

### Without Docker

```bash
# Inside terminal run
yarn install or only Yarn

# After install all dependencies run
yarn start
```

Open the browser and access http://localhost:3000

# Things I wish I had done

    1. Write tests for all application components;
    2. Write snapshot for all application components;
 











