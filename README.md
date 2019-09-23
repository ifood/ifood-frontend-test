# Spotifood

This is the application requested on the hiring process for iFood. Its latest version is hosted and can be accessed through [this link](https://lpfjustino.github.io/ifood-frontend-test/).

## How to run locally

### Prerequisites
In order for the steps below to work you must have installed:
* git
* node


### Steps
* Clone this repository
```
git clone git@github.com:lpfjustino/ifood-frontend-test.git
```
* Access the generated folder
* Install the dependencies using npm or yarn
```
npm install
yarn install
```
* Run the development service and you should see the page after a while
```
npm start
```

## Technical specification

This is a React application, which is one the most widely used libraries. Redux is used in order to have a single source of truth with predictable and easily testable mutations. Jest and Enzyme were used for unit testing to assure that functions are called with the proper parameters, components receive the props they're supposed to and behave accordingly when they change.
Besides that a few other technologies choices were: axios to perform HTTP requests, lodash to have access to a bunch of utils, reacstrap for styling, SASS for more maintainable CSS and finally eslint and prettier to keep the code base consistent in terms of code style
