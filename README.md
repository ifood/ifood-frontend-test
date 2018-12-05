# Spotifood

This is spotifood, an app to find playlists while eating!

## Dev

Install dependencies running

```
yarn
```

then, run the app with

```
yarn start
```

### Test

To test, run

```
yarn test
```

for coverage, run

```
yarn coverage
```

and then check the `coverage/` dir for the report.

### Build

To build, run

```
yarn build
```

You can find the build app at the `build/` directory.

The app has less than 100KB after gzip.

## Architecture

This app is bootstraped with [create-react-app](https://github.com/facebook/create-react-app).

It uses `typescript` for static typing and `tslint` for linting.

### Redux and Ducks

For state management, we use redux with the [re-ducks architecture](https://github.com/alexnm/re-ducks).

Also, it tries to follow the [container/component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) as much as possible.

### Tests

The app is not thoroughly tested, but we use

- jest: for general testing
- react-test-renderer: for component testing

### Mobile-first

The app looks fine in most resolutions.

### Misc

Here are some other technologies used:

- axios: for HTTP requests
- styled-components + bulma + font-awesome: for styling
- react-infinite-scroller: for automatic pagination while listing playlists
- react-image: to show a placeholder while playlist images are not loaded
- prettier + tslint + lint-staged: for formatting and lint on pre-commit

## What can be improved

- There are no visual feedback for loading playlists
- There are no visual feedback that no playlists met the search
- There are some visual inconsistencies when automatically scrolling to top for new searches/listings
- The config API locale was ignored for simplicity
- The config API limit/offset were ignored in favour of simplicity/infinite scrolling
- Spotifood logo could use some love
- Bulma default colors were used for the sake of fast development, some better colors could be used
- Token expiration is not handled whatsoever, the application just ceases to work correctly
- 'Sign out' button is hidden on mobile for visuals, but this can be a disaster in union with the previous item
- Login button was meant to have a spotify logo, but `react-spotify-login` does not allow it
- Bulma is modular, so the best solution would import only what is used, and not everything (as it is being done). We could achieve less than the actual 100KB app size easily.
- Error support is kind of ridiculous
