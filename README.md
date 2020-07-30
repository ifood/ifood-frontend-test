# Welcome to Spotifood!

This project has been developed to ifood frontend test.
**Spotifood** is a web application to display the preferred playlists from iFood's customers. It has only one page with three principal components.

 - Login Component - Allow user to login in Spotify and get access token to consume Spotify API
 - Featured Playlists Component - Show the playlist items searched in [SpotifyAPI](https://developer.spotify.com/web-api/get-list-featured-playlists/)
 - Advanced Filters Component - List of filters mounted by consuming this API [Playlist Filters API](http://www.mocky.io/v2/5a25fade2e0000213aa90776)

# Featured features
This project has some features  developed from business rules of the challenge

 - Login: This application has integration with Spotify to get authorization to consume the playlist API
 - Playlists: Integration with Spotify API to get featured playlists.
 - Filters: List of filters mounted consuming the API from mocky. Every time that a filter is changed, the list is refreshed accordingly with the values.
 - Each 30 seconds the page refresh it content
 - It need to be responsive

# Run Application

To run the application you just need to follow this steps:

 1. Clone the repository
 2. Install the dependencies `npm install` or `yarn`
 3. Run the application with `npm start` or `yarn start`

## Techs and libraries used in the project

The project has been developed using ReactJS with some popular libraries, like:

 1. antd - UI library
 2. redux - State managemente
 3. axios - Make Http requests
 4. less - Stylization

## Printscreens of the application

Here is some prints of the application, starting with the Login
![enter image description here](https://i.imgur.com/VJ91pZS.png)
After logged in you can see the featured playlists and the related filters
![enter image description here](https://i.imgur.com/8O8083Q.png)
And you can use the displayed filters like language, country, quantity per page or page number
![enter image description here](https://i.imgur.com/ap6RpY8.gif)
And with search input, you can filter the displayed playlists by name
![enter image description here](https://i.imgur.com/zDd6seq.gif)
