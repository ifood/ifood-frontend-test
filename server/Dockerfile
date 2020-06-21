FROM node:14

WORKDIR /usr/src/app

COPY . .

COPY .env.production .env

RUN yarn
RUN yarn build

EXPOSE 5000

CMD [ "node", "build/index.js" ]