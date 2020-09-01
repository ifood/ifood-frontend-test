# Spotifood

Application integrated with the Spotify playlist listing API with filter functionality from another API.

## Pré-requisitos

You need to have the following configuration installed on your computer:

> - **Node** > 8.1 - [Node Donwload](https://nodejs.org/pt-br/download/)
> - **NPM** > 5.6 - [Npm Donwload](https://www.npmjs.com/package/download)

## Installation

Clone the following repository:
```
	git clone https://github.com/LuAnderson/ifood-frontend-test.git
```
Access the project folder and and type the following command to download all the execution dependencies for this project:
```
	yarn install
```
or
```
	npm install
```
(I recommend Yarn)

## Execution

You need to insert a token in your application, you can obtain that token through the link: https://developer.spotify.com/console/get-playlist/

You will need to login with your spotify account.

This code must be inserted into the following file: src/services/playlist/index.js
Replace '@ToDo: Insert OAuth Token'.

After configuring the project and waiting for the development dependencies to be installed, execute the command to run the application. 

```
 	yarn start
```

To run the unit tests in the application, execute the following command. That way you will be able to view the unit tests implements:

```
 	yarn test
```

To view the storybooks of the components present in the application you must execute the following command:

Through the storybook you can see how the application components work. Through it you will see the interface, the necessary parameters and variants.

```
 	yarn storybook
```

## Functionalities

The main features of the application are, playlist listing according to inserted parameters used to filter.
For example it is possible to obtain playlists according to language, location, name, date, among other filters.
By clicking on the playlist of your desire, you will be redirected to spotify in the selected playlist.

Not only limiting the functionality of filters, you can also choose the number of elements you want to see on the screen.

## Tests

The application contains unit tests developed with a primary focus on jest.

Tests were carried out on components and some methods of the service.

## Author

 - **Lucas Anderson Lima** - Developer - [Github](https://github.com/LuAnderson) | [Site](http://lucasanderson.com.br/)


## License 

MIT License (MIT)

## Thanks 

Thanks iFood for the proposed challenge, I had fun, I found it interesting.

---
Author ❤ [Lucas Anderson Lima](http://lucasanderson.com.br/)