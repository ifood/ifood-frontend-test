# iFood Frontend Test

A application proposed by iFood where you can login with Spotify Account to check a variaty of playlists in different countries, langages and dates.

<details>

 <summary> Description of the test </summary>

Create a web application called Spotifood used to display the preferred playlists from iFood's customers. The web application has only one page:

* A page that lists the featured playlists at Spotify according to some criteria.

## Business rules

* The page is composed of two components:
  * One list of featured playlists
  * One filter component with API filter fields and one local search text input to filter the playlists by "name".

* The filter component should be used to filter the elements displayed by the list of featured playlists.
* The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (<http://www.mocky.io/v2/5a25fade2e0000213aa90776>)
* The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (<https://developer.spotify.com/web-api/get-list-featured-playlists/>)
* Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
* Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## Hints or Constraints

We will use one API from Spotify Web API. You should follow the Spotify guide in order to create a token needed to access Spotify's API.
To mount the API filter fields on the filter component, you **must** consume the API that provides the metadata about the fields (Link 1).
You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution. We will not provide any UI prototype or design.

## Non functional requirements

As this application will be a worldwide success, it must be prepared to be accessible, responsive, fault tolerant and resilient.
We **strongly recommend** using React to build the application.
Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks.
Fork this repository and submit your code.

</details>

### Technologies

This project followed the recommendation to use React as a framework, and the additional dependencies were used:

1. React-router-dom
2. Axios
3. Date-fns
4. Material-ui/icons
5. Styled Components
6. TypeScript

This project also enforce code style with EsLint and Prettier.

### Architecture

Thinking ahead of the possibility of growth and evolution of this application the architecture was build to garantee the maintability and organization of the project as follow.

#### Project structure

```
Spotifood
┃public
┃ ┣ favicon.ico
┃ ┣ index.html
┃ ┣ manifest.json
┃ ┗ robots.txt
┃src
┃ ┣ assets
┃ ┃ ┣ img
┃ ┃ ┃ ┗ logo.png
┃ ┃ ┗ styles
┃ ┃ ┃ ┗ global.ts
┃ ┣ components
┃ ┃ ┣ FeaturedPlaylist
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┣ style.ts
┃ ┃ ┃ ┗ types.d.ts
┃ ┃ ┣ Filters
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.ts
┃ ┃ ┣ Input
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.ts
┃ ┃ ┗ Select
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.ts
┃ ┣ config
┃ ┃ ┗ index.ts
┃ ┣ pages
┃ ┃ ┣ Home
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.ts
┃ ┃ ┗ Login
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.ts
┃ ┣ services
┃ ┃ ┣ api.ts
┃ ┃ ┗ storage.ts
┃ ┣ store
┃ ┃ ┗ index.ts
┃ ┣ utils
┃ ┃ ┣ index.ts
┃ ┃ ┗ types.d.ts
┃ ┣ App.tsx
┃ ┣ index.tsx
┃ ┣ react-app-env.d.ts
┃ ┗ routers.tsx
┣.editorconfig
┣.eslintignore
┣.eslintrc.js
┣.gitignore
┣ package.json
┣ prettier.config.js
┣ README.md
┣ tsconfig.json
┗ yarn.lock
```

- assets: spotifood logo and global styles to be used in the entire application

- components: components that can be reusable and are used in the composition of the pages Home and Login

- config: configuration of spotify api

- pages: screens of the application

- services: implementation of functions for APIs and LocalStorage

- store: State and Reducer used in the page Home

- utils: util functions

#### Details of project

1. React-router-dom are used to the navigation between pages (Login and Home).
2. Login has a button were user are redirected to the Spotify authentication, when user authorize the app  the they are redirected to the Home page.
3. Home has a header that contains the search bar and a button filter where user can do some advanced filtering.
4. Local Storage are used so the user is kept logged in
5. State is controlled by React Hooks
6. Layout responsive and mobile first

### Usage

Download or clone this repository to your local machine then install the dependencies.

#### Install

As root, in the command line do:

```cmd
#with yarn
yarn install

#with npm
npm i (or npm install)
```

#### Run

In the root folder do the follow:

```cmd

#with yarn
yarn start

#with npm
npm start
```
