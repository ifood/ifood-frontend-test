const url = require('url');
const http = require('http');
const request = require('request');

const client_id = '0ccd27fc88af4a6d977c79da63468b84';
const client_secret = '394b1b9256634cca8e8a03a1376f4fb0';

// your application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

const getFeaturedPlaylists = (qs = {}) => {
  return new Promise((resolve, reject) => {
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        const token = body.access_token;
        const options = {
          url: 'https://api.spotify.com/v1/browse/featured-playlists',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          qs,
          json: true
        };
        request.get(options, (error, response, body) => {
          resolve(body);
        });
      }
    });
  });
}


http.createServer(async (req, res) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }
  const incomingUrl = url.parse(req.url, true);
  if (req.method === 'GET' && incomingUrl.pathname === '/featured-playlists') {
    const result = await getFeaturedPlaylists(incomingUrl.query);
    res.writeHead(200, {
      ...corsHeaders,
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({ result }));
    res.end();
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Not found.');
    res.end();
  }
}).listen(4000);