FROM node:13.12.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN yarn

COPY . .

RUN yarn bootstrap
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/packages/shell/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]