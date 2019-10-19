/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var http = require('http'); // "Request" library
var request = require('request'); // "Request" library

var client_id = '0ccd27fc88af4a6d977c79da63468b84'; // Your client id
var client_secret = '394b1b9256634cca8e8a03a1376f4fb0'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

function getFeaturedPlaylists() {
  return new Promise((resolve, reject) => {
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: 'https://api.spotify.com/v1/browse/featured-playlists',
          qs: {
            country: 'BR',
            limit: 5
          },
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(options, function(error, response, body) {
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
    'Access-Control-Max-Age': 2592000, // 30 days
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }
  if (req.method === 'GET' && req.url === '/featured-playlists') {
    const result = await getFeaturedPlaylists();
    res.writeHead(200, {
      ...corsHeaders,
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({ result }));
    res.end();
  }
  else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Not found.');
    res.end();
  }
}).listen(4000);