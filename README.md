# Spotifood

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner and build a coverage file after the run.<br />
The coverage file can be found at **coverage\lcov-report\index.html**

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `npm run lint`

Will analyse all the files based on eslintrc.js file and print out warning and failures. <br />
There is another option to run the lint and fix them all, for it run `npm run lint:eslint:fix`

## Architecture details
The project was built basicaly using the following packages:
1. React
2. Redux
3. Redux Sagas
4. Styled Components
5. Jest + Enzyme

### Pattern
It uses the pattern of react components and containers,  where **containers** will be the one responsible for fetching data and pass it to sub-components. <br />

### Folder structure
Inside `src` folder we have two main folders, components and containers. <br />
Inside components/containers folder the components should have it own folder with an `index.js` file.<br />
Tests related to the component or any file should be inside a `tests` folder with the file name with suffix of `tests.js`. <br />

So a component named Button should be placed inside components like:
* Button/index.js
* Button/tests/index.test.js
