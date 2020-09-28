# Spotifdood.

This project was part of the selection process for front-end developer at Ifood

# Table of contents

- [Development Language](#development-language)
- [Dependencies](#Dependencies)
- [Development dependencies](#Development-dependencies)
- [Getting Started](#Getting-Started)
- [Starting the web application](#Starting-the-web-application)

# Development language

Project made with ReactJS.

The architecture and components are below.

# Architecture Folder

The architecture folder of the files followed the standards the:

# Architecture

The architecture of the files followed the standards the:

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
├── config-overrides.js
├── jsconfig.js
├── package.json
├── README.md
└── yarn.lock
```





