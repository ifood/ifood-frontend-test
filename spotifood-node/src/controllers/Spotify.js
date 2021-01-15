let querystring = require("querystring");
let axios = require("axios");
let stateKey = "spotify_auth_state";
let client_id = "a9617872bdfa4d2e82927a552109cf3c"; // Your client id
let client_secret = "a6df9a3a07a34cb3b848af40f3a9ed40"; // Your secret
let redirect_uri = "http://localhost:8888/callback"; // Your redirect uri
let generate = require("../util/generate");

var code = null;
var state = null;
var storedState = null;

module.exports = {
  //validação do  Authetication
  async Auth(request, response) {
    let stateNew = generate.generateRandomString(16);
    let scope = "user-read-private user-read-email";

    response.cookie(stateKey, stateNew);
    response.redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: stateNew,
        })
    );
  },
  //get it a token
  async CallbackSpotify(req, res) {
    code = req.query.code || null;
    state = req.query.state || null;
    storedState = req.cookies ? req.cookies[stateKey] : null;

    res.redirect("http://localhost:3000/home/");
  },

  //Refress a token
  async RefressToken(req, res) {
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      form: {
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      },
      json: true,
    };

    axios.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          access_token: access_token,
        });
      }
    });
  },

  async TokenUser(req, res) {
    if (state === null || state !== storedState) {
    } else {
      res.clearCookie(stateKey);

      await axios({
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        params: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: "authorization_code",
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
      })
        .then(async (resp) => {
          const accessToken = resp.data.access_token;
          const refreshToken = resp.data.refresh_token;

          await axios({
            url: "https://api.spotify.com/v1/me",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            params: {
              access_token: accessToken,
              refresh_token: refreshToken,
            },
          })
            .then((resp) => {
              const user = resp.data;
              res.json({ user, accessToken, refreshToken });
            })
            .catch((err) => {
              if (err.response.status === 401) {
                console.log("unauthorized, logging out ...");
                res.json(err.response.status);
              }
            });
        })
        .catch((err) => {
          console.log(err.response.status);
          res.json(err.response.status);
        });
    }
  },

  async Playlist(req, res) {
    const accessToken = req.headers.authorization;
    const { country, locale, timestamp, limit, offset } = req.query;

    if (offset < 0) {
      offset = 0;
    }

    await axios({
      url: "https://api.spotify.com/v1/browse/featured-playlists",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + accessToken,
      },
      params: {
        country: country,
        locale: locale,
        timestamp: timestamp,
        limit: limit,
        offset: offset,
      },
    })
      .then((resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        console.log(err.response.status);
        res.json(err.response.status);
      });
  },
};
