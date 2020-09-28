# Spotifood

## First things first

Open the [Spotifood-bridge repository](https://github.com/antoniomesquita09/spotify-login-bridge) and follow the Getting Started instructions to setup your Spotify OAuth login bridge.

## Getting started

In the project directory, you can run:

```console
cp .env.sample .env
```

---

### Running with docker

Make sure you have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) already installed in your machine.

```console
docker-compose up --build
```

To run the app inside a docker container.

---

### Running with yarn

Make sure you have [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install) already installed in your machine.

```console
yarn
```

To install all the dependencies listed in package.json

```console
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view the spotifood website in the browser.

```console
yarn test [-u]
```

Launches the test runner in the interactive watch mode.<br />
Using the flag -u you can update the snapshots.

---

### Deployed version

You can see the Spotifood website production version on:
[https://antonio-spotifood.netlify.app/](https://antonio-spotifood.netlify.app/)


Author: Antonio Mesquita Junior<br />
Hope you enjoy ☺️