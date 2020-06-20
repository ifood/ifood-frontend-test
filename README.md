# Spotifood
[![CircleCI](https://circleci.com/gh/jonatassales/spotifood.svg?style=svg&circle-token=69249669c1948c23f2926277b4aa1f0d186be3e7)](https://circleci.com/gh/jonatassales/spotifood)

## Disclaimer
This project is an experiment that put in practice some cutting edge architectural approaches such as Microfrontends, Monorepos and GraphQL BFFs. I don't personally believe that you should implement those architectures in a prototype or even start a new project with it. There are several downsides involving microfronted compositions from performance to tooling complexity (which I have faced during the development process).

### Root Folders
`client` and `server` folders are only together in the same project for documentation purposes. They should be separated projects in real world.

### Main Technologies
 - React
 - Typescript
 - Styled-components
 - PubSub 
 - Yup
 - GraphQL
 - Apollo Client
 - Apollo Server
 - NodeJS
 - Redis

### Tooling and related
 - CircleCI integration (`client/` only)
 - Error monitoring with Bugsnag
 - Storybook
 - Eslint
 - Jest with testing-library
 - Webpack
 - Docker with docker-compose

## Architecture
Ifood is a fast-growing company used in all over the country and it aims to be used worldwide. With that in mind we should think of it as a product with many maintainers. Microfrontends come up to solve this organization problem by splitting up the product so smaller teams can take care of a specific business domain.

## Monorepo
I've split this project in two subdomains (`@spotifood/filter` and `@spotifood/playlists`). Each subdomain is a independent application with its own tech choices. However, they have to follow common tooling rules such as linters, compilation configs and test configs. Also, I restricted the micro apps to use only React and Typescript. This decision is to avoid performance-wise issues such as oversized bundles and CPU consumption as well an overhead of tech choices. I've used the monorepo strategy to link the microfrontends on each other as well as common dependecies such as communication and internationalization. I used yarn workspaces to compose them up and lerna to help on build, test and publish processes.

### Monorepo structure
    .
    ├── ...
    ├── packages
    │   ├── communication-sdk        # Event communication
    │   ├── internationalization     # i18n provider
    │   ├── filter                   # Filter microfrontend
    │   ├── playlists                # Playlist microfrontend
    │   ├── shell                    # Orchestrator
    │   └── ui                       # UI Toolkit + Storybook
    └── ...

## Shell
The microfrontends are composed in a shell application, which is also a monorepo package. Shell basically orchestrates the composition as well as take care of webpack infrastructure. I've used the Code-Splitting technique combined to Dynamic Imports to lazy load the bundle chunks in order to improve performance and reduce the first paint.

```javascript
const I18nProvider = lazy(() => import(
  /* webpackChunkName: "internationalization" */ '@spotifood/internationalization'
))

const CommunicationProvider = lazy(() => import(
  /* webpackChunkName: "communication-sdk" */ '@spotifood/communication-sdk'
))

const Playlists = lazy(() => import(
  /* webpackChunkName: "playlists" */ '@spotifood/playlists'
))

const Filter = lazy(() => import(
  /* webpackChunkName: "filter" */ '@spotifood/filter'
))
```

As you can see the microfrontend are lazy loaded and the rendering is suspended showing instant feedback to the user

```javascript
<ShellContainer>
  <Header /> <-- Renders first! rendering below is suspended
  <Suspense fallback={<Loader />}>
    <I18nProvider>
      <CommunicationProvider>
        <MicrofrontendsContainer>
          <Suspense fallback={<Loader />}>
            <Filter />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Playlists/>
          </Suspense>
        </MicrofrontendsContainer>
      </CommunicationProvider>
    </I18nProvider>
  </Suspense>
</ShellContainer>
```

## Communication
Graphql is used in the client to communicate with the server. I've used Apollo which provides a fantastic API to work with cached data in both, client and server side. Apollo client is used only to fetch and cache, and it's not being used to manage state inside the application. As microservice approaches commonly use event and command bus techniques to stablish a decoupled communication between the services, in the microfrontends is no different. I thought that using a state container like redux would couple all micro apps to this dependecy. Microfronteds must to be as much agnostic as possible, so I decided to use events. The `communication-sdk` is a typed wrapper around `pubsub-js`, which is a dependency free package. This could eventually be replaced to a more robust solution like RxJS.

### Usage example

The filter microfronted publishes...

```javascript
const onSearch = useCallback(
  () => {
    publish(FilterEvents.FilterLimit, GlobalConstants.MaxLimit)
    publish(FilterEvents.Search, search)
    publish(FilterEvents.FilterOffset)
    setTouched(true)
  },
  [search, publish]
)
```

The playlist microfrontend handles the event...

```javascript
useEffect(() => {
const searchTopic = subscribe(FilterEvents.Search, (_topic, value) => {
  setSearch(value)
})

return () => {
  unsubscribe(searchTopic)
}
}, [subscribe, unsubscribe])

return (
<ApolloProvider client={client}>
  <Playlists
    search={search}
  />
</ApolloProvider>
)
```

## Design
`Styled-components` is great to work with themes and it helps a lot while building a UI toolkit. There's a seperate package for it which comes with a storybook. A team could be responsible for that as it's fundamental part to build any other microfrontend.

### Themes
Each microfrontend exports its themes and the orchestrator is reponsible for fill with theme content

```javascript
// @spotifood/filters
declare module 'styled-components' {
  export interface DefaultTheme {
    filter: FilterTheme;
  }
}
```
```javascript
// @spotifood/shell
const theme = useMemo((): DefaultTheme => ({
  shell: {
    color: Colors,
    breakpoints: Breakpoints
  },
  filter: {
    color: Colors,
    breakpoints: Breakpoints
  },
  playlists: {
    color: Colors
  }
}), [])
```

Some people believe it's wrong to enforce horizontal teams like a design team. I think it's good for maintain consistency across the application.

### Storybook
In order to check the UI stories got to `client/packages/ui` and run:

```bash
yarn storybook
```

## Tests
For unit and integration tests I've used Jest with testing-library. RTL has a very maintanable way to write tests that closely resemble how your web pages are used. If I had more time I'd include E2E testing with cypress.

## Tooling
### Code standards
I've used eslint and typescript rules as static checkers. Rules are defined in root level of `client` because this should be enforced to every frontend team. I've also used editorconfig to help on it.

### Error monitoring
I've used bugsnag as the error monitoring platform. Any Error raised by the application should be alerted on the platform. Every micrfrontend should point to its own configs or even opt for other bug report.

### CI/CD
I've used CircleCI to run the pipeline jobs. Currently it's not deploying anywhere, only building and testing. In order to fit in this pull request everything is in one repo, but there should be independent pipelines and deploy for each microfrontend. Lerna publish should be permormed only by the pipeline process.

### Ghooks
Blocks any commit or push before linting, building and testing.

## Server-side
There's a BFF between the front and the spotify and filters API. There are two reasons for that: 
  1. Reduce the payload size as well as the number of requests.
  2. GraphQL DataSources combined to Redis has a amazing caching power.
However, time-to-leave is 30 seconds in order to fulfill the test requirements. It might help reduce network traffic though. 

## Ifood Test Checklist

## Running the app!
### Requirements
 - Node
 - Yarn
 - Docker
 - Docker-compose

In root, simply run:
```bash
docker-compose up -d
```

The application will be available at `http://localhost:9000/`

GraphQL sandbox will be available at `http://localhost:5000/`

## Running manually
### Server
First, let's build a container dependency:
```bash
docker run --publish 9002:6379 --detach redis:latest
```

Now, go to `server/` and install the dependencies:
```bash
yarn
```

And finally run:
```bash
yarn start
```

### Client
Go to `client/` and install the dependencies:
```bash
yarn
```

To link dependencies run:
```bash
yarn bootstrap
```

And then build the frontend:
```bash
yarn build
```

To make sure everything is working fine run:
```bash
yarn lint && yarn test
```

Finally, run:
```bash
yarn start
```

The application will be available at `http://localhost:8080/`.

I hope you enjoy it =)
