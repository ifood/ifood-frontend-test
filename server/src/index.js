const path = require('path');
const express = require('express');
const session = require('express-session');
const correlator = require('express-correlation-id');

const route = require('./route');
const spotifyRefreshToken = require('./middleware');

const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || '8080';

if (!isDevelopment) {
	app.use(express.static(path.resolve(__dirname, '../../client/dist')));
}

// webpack middleware dev
let middleware;
const distIndexFile = path.resolve(__dirname, '../../client/dist/index.html');

app.use(express.json());
app.use(correlator());

//Apenas para uso do teste.
app.use(
	session({
		secret: 'iFood-frontend-test',
		resave: false,
		saveUninitialized: true,
		name: 'spotifood'
	})
);

app.use('/playlists', spotifyRefreshToken());
//implementando rota
app.use('/', route);

if (isDevelopment) {
	const webpack = require('webpack');
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');

	const config = require('../../webpack.config');
	const compiler = webpack(config);

	middleware = webpackMiddleware(compiler, {
		path: config.output.path,
		publicPath: config.output.publicPath,
		hot: true,
		contentBase: path.resolve(__dirname, '../../client/src'),
		stats: 'minimal'
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
}

if (isDevelopment) {
	app.get('*', (req, res) => {
		console.log(`dev: ${isDevelopment}`);
		res.write(middleware.fileSystem.readFileSync(distIndexFile));
		res.end();
	});
} else {
	app.get('*', (req, res) => {
		console.log('production --> sendind file index.html');
		res.sendFile(distIndexFile);
	});
}

app.listen(PORT, '127.0.0.1', () => {
	console.log(`Server up ${PORT}`);
});

module.exports = app;
