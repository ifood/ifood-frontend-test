# iFood / SpotiFood


[![CircleCI](https://circleci.com/gh/fabriciofrontarolli/spotifood.svg?style=svg)](https://circleci.com/gh/fabriciofrontarolli/spotifood)

### Acceptance Criteria
    * [x] Two components: One list of playlists. One filter component with API filter fields and one local search text input to filter the playlists by "name".
    * [x] The filter component should be used to filter the elements displayed by the list of featured playlists.
    * [x] The API filter fields and their possible values/type should be mounted by consuming this API
    * [x] The featured playlists to be displayed should be consumed from this API.
    * [x] Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
    * [x] Refresh spotfy playlists page every 30 seconds.
    

### Tech

iFood SpotiFood uses a number of open source projects to work properly:

* [ReactJS] - As frontend lib!
-- Redux ducks modules
-- Could have used style components to better modularize components.
-- Services Layer: I created a Services layer to centralize communication with external world. Initially I used Firebase Firestore database, suited perfectly in this layer. But then I rolledback and kept only REST interactions.
* [Redux] - A Predictable State Container for JS Apps
-- Could have used Redux-Sagas to centralize side-effects.
* [Eslint] - Pluggable javascript linter (with Airbnb rules)
* [Babel] - Babel 7 Javascript compiler
* [ParcelJS] - A seamless packer to interpret SASS, JAX, ES6, etc...
* [Bootstrap] - Great UI Framework for modern web apps
* [Jest] - Delightful JavaScript Testing
* [Firebase Hosting] - Production-grade web content hosting for developers
* [CircleCI] - CI/CD Platform

### Running the Project

iFood SpotiFood requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spotifood
$ npm install
$ npm start
```

- The app will start at port 15000

### Test Coverage
To get the code coverage for the frontend run:

```sh
$ cd spotifood
$ npm install
$ npm run test
```

### Demo

- **Demo Link** A live version of the app is available at https://spotifood-cf4c0.firebaseapp.com/

# **Login Page**

![Login Page](https://i.imgur.com/pg9eRRs.png)

# **Landing Page**

![Landing Page](https://i.imgur.com/mOBEIaw.png)

### Consideradions

### Workflow

-- **Branching**: Used one single branch (master)

-- **Architecture**: I started building the boilerplate to prepare the overall codebase to develop the app. (1. Setup the app boilerplate (modules, actions, reducers, etc..) 2. Setup the services (REST requests, etc..)

-- **Layout**: Created the overall template to build the app (Login and Landing page) considering **Mobile First**

-- **Integration**: Studied/Learned how to authenticate and interact with the Spotify API and adjusted the service code to integrate with the API.

-- **Refinements**: With the overall functionality working, started fine-tunning and organizing the app.

-- **Tests**: Created tests for the functionlity build - not proud to do tests after development x) but took this approach because I had to first figure out the overall REST integrations and Spotify authentication, and figure out how the components would be abstracted.

- I decided not to have a BFF (Backend for Frontend) because Spotify made an integration available in which I didnt have to expose the secret key. By just having assets as deliverable it was easy for me to CI/CD to Firebase Hosting.

### CI/CD

- I setup CI with CircleCI. It has 1 workflow: 


--- **build**: This job build and install dependencies, packs the application and deploy the assets to Firebase Hosting.
- **Continuous Delivery**: The app is Continuously Delivered to Firebase after each successfull commit on master.



### TODOs
 - Frontend
    - Add PropTypes to each component
    - Write Tests for the components
    - Write Tests for services
    - Write integration tests
    - Add Validations
    - Improve Layout
    - Write more tests
    - Properly document (JSDoc) each component, service, etc...

License
----
MIT
