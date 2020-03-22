const express = require('express');
const SpotifyController = require('../spotify/controller');
const FilterController = require('../filters/controller');

const router = express.Router();

router.get('/authorize', SpotifyController.authorize);
router.get('/playlists', SpotifyController.featuredPlaylist);

router.get('/filters', FilterController.filter);

module.exports = router;
