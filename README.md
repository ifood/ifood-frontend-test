# Spotifood 🍕 + 🎶

Ifood's customers playlists.

![Spotifood](https://i.imgur.com/oAWV4j3.png)

## The project

### Main technologies

- React
- Typescript
- Material UI
- Styled components
- Eslint
- Jest

### Patterns

- Airbnb - as code style guide
- Material Design - as principles of design
- Notion - to manage tasks

### Tools

- Adobe XD
- VSCode
- Notion

### Project structure

![Project structure](https://i.imgur.com/9UODju5.png)

- **public** - Static files;

- **src** - Our source code;

    - **assets** - Images, Global styles
    - **components** - Reutilizable componets
    - **config** - Constants variables and environments config
    - **hooks** - Shares values around the app
    - **pages** - Browser pages;
    - **routes** - Config the app navigation;
    - **services** - Calls external services;
    - **theme** - Application colors;



### Running the app

***Note***: You need [Node.js](https://nodejs.org/en/) in your machine.

```sh
$ git clone https://github.com/mariocsantos/spotifood.git
$ cd spotifood
$ yarn
```
Before running, let's set our environment, create a **.env** file, with bellow values.
```sh
REACT_APP_CLIENT_ID=64b87046508647a783ce1f7e587213ea
REACT_APP_CLIENT_SECRET=5264ca34ed68421aaad28b4e462869e6
```

**REACT_APP_CLIENT_ID** Spotify client id.

**REACT_APP_CLIENT_SECRET** Spotify client secret.

To get Spotify credentials, [see documentantion](https://developer.spotify.com/web-api/get-list-featured-playlists/).

Now, just run:
```sh
yarn start
```
Done 😍.

### Tests
To run tests, just execute.

```sh
yarn start
```

### Build
To generate build production.

```sh
yarn build
```

By Mario Santos ❤️.
