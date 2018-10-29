# Spotifood

## Architechture details

- The solution was designed using create-react-app as the scafolding tool for out of the box webpack 4 config.

- React was chosen as suggested because it's very powerful and fast to develop

- The project structure is simple yet very effective. I chose to divide the app between containers that represents the main views of the application and components that are only responsible for rendering a specific content according to the data given to them.

- Even though redux wasn't really necessary due to the size of the app, I've chosen to use it because it was supposed to escale, thus adding redux would be a must eventually. Furthermore I've chosen redux-saga for handling side-effects in redux, as it's very powerful and testable.

- Also, the files are separated by responsibility to avoid monolith files. i.e. Playlists.jsx has many files for each functionality such as Playlists.api.js, Playlists.saga.js, etc.

- I've used Material-UI because I didn't know the library and I wanted to try it. My impression was that it was good, but Ant Design is still much better =)

- Tests are always located with the File being tested. Keeping things close usually increases the development velocity for quite a bit!

- There are some things that I would improve, such as the withAuthorization component. It would be better to open the spotify authorization in a new small window and set the token into localStorage. Also, make a test request to avoid going through the login flow if we already have a valid token in localStorage.

- I would also increase the code coverage
