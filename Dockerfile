FROM node:14.4.0-alpine as base

ARG NODE_ENV
ARG PORT
ARG REACT_APP_SPOTIFY_AUTH_URL
ARG REACT_APP_SPOTIFY_API_URL
ARG REACT_APP_FILTER_API_URL

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT
ENV REACT_APP_SPOTIFY_AUTH_URL=$REACT_APP_SPOTIFY_AUTH_URL
ENV REACT_APP_SPOTIFY_API_URL=$REACT_APP_SPOTIFY_API_URL
ENV REACT_APP_FILTER_API_URL=$REACT_APP_FILTER_API_URL

RUN apk add --update --no-cache alpine-sdk python

WORKDIR /spotifood/

COPY package.json yarn.lock jsconfig.json .eslintrc.js prettier.config.js /spotifood/

RUN yarn --pure-lockfile

COPY src /spotifood/src/

COPY public /spotifood/public/

EXPOSE 3000

FROM base as development

CMD yarn start
