# Spotifood :notes:

This application was developed in response to the test for the Frontend developer position at Ifood.

The requirements are described in [ifood-frontend-test](https://github.com/ifood/ifood-frontend-test).

## Running

:small_blue_diamond: yarn - to install dependencies;

:small_blue_diamond: yarn start - to run app;

:small_blue_diamond: yarn build - to run build for deploy app.

## Architecture

This app was developed with React Functional components with React Hooks.
For structures was used:

:small_blue_diamond: **ReactJs**
:small_blue_diamond: **StyledComponents**
:small_blue_diamond: **React-icons**
:small_blue_diamond: **Date-picker**
:small_blue_diamond: **React Hooks**
:small_blue_diamond: **React Router DOM**
:small_blue_diamond: **Axios**

## Folder Structure

The folder structure is defined from the src folder which is the baseUrl.

 ```
src
  ├ assets
  | └ background-spotifood.jpg
  | └ icon.svg
  ├ Components
  | ├ Content
  | |   ├ index.tsx
  | |   └ styles.ts
  | ├ LayoutPage
  | |   ├ index.tsx
  | |   └ styles.ts
  | ├ MainHeader
  | |   ├ index.tsx
  | |   └ styles.ts
  ├ Hookes
  | ├ auth.tsx
  | ├ index.tsx
  | ├ playlistsHook.tsx
  | └  themes.tsx  
  ├ Pages
  | ├ PlaylistsHome
  | |  ├ PlaylistCards
  | |  |    ├ index.tsx
  | |  |    └ styles.ts
  | |  ├ PlaylistFilters
  | |  |    ├ index.tsx
  | |  |    └ styles.ts
  | ├ index.tsx
  | └ styles.ts
  ├ Services
  | ├ API
  | |  └ configApi.ts
  | ├ authenticateService.ts
  | ├ filterService.ts
  | └ spotifyService.ts
  ├ Styles
  | ├ Themes
  | |  ├ ifood.ts
  | |  └ spotify.ts
  | ├ GlobalStyles.ts
  | └ styled.d.ts
  ├ Utils
  | ├ applyMask.ts
  | ├ emojis.ts
  | └ getToken.ts
  |App.tsx
  |index.tsx
  └ reactapp-env.d.ts
  ```

## Enjoy :headphones:

https://spotifood-gmenezes.netlify.app
