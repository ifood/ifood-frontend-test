# Spotifood by Roberto Campos

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

For the solution, I divided it into two parts:

1- A Middleware for communication with Spotify

2- A SPA system to solve the problems inherent in chaotic changes

## Briefing

### About Middleware (1):

- Reading the [Spotify API](https://developer.spotify.com/documentation/general/guides/authorization-guide/) I realized that it was really ideal to make a server side communication to make the authorization with the Spotify API. I used NodeJs for creation and Express as a framework for creating the communication api.

### About the SPA (2):

- I used ReactJs tas a web framework, Cookies to keep the data in the client and styled-components to style the components. I used the Atomic Design approach as a design system. I chose not to use any CSS framework to achieve a better result but I was unable to create a responsiveness for mobile in a timely manner. I also chose not to use Redux as a state manager because in this case I'm taking data from a single API.

## Setup!

### Middleware

- `npm install` to install dependencies
- `node app.js` to run service

### SPA

- `npm install` to install dependencies
- `npm run start` to run client
