const express = require('express');
const Spotify = require('./controllers/Spotify');
const Error = require('./controllers/error');
const router = express.Router();


router.get('/login', Spotify.Auth)
router.get('/callback', Spotify.CallbackSpotify)
router.get('/refresh_token', Spotify.RefressToken)
router.get('/token', Spotify.TokenUser)
router.get('/playlist',Spotify.Playlist)


module.exports = router