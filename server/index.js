const http = require('http')
const axios = require('axios')

/* */

const SPOTIFY_CLIENT_ID = 'c26641e436524b9cbb1c09b4a6ccea3c'
const SPOTIFY_CLIENT_SECRET = '80913e0ee3ea4c44a4b38f387cc3c7db'

/* */

const server = http.createServer()

/* */

server.on('request', (req, res) => {

    if(req.method === 'OPTIONS'){

		res.writeHead(200)
		res.end()

		return

	}

    let clientEncoded = new Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')

    /* */

    axios({

        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params : {

            grant_type : 'client_credentials'

        },

        headers : {

            'Accept' :'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'

        },

        auth: {

            username: SPOTIFY_CLIENT_ID,
            password: SPOTIFY_CLIENT_SECRET

        }

    }).then(response => {

        console.log(`[${new Date()}] Requesting Spotify Web Api Token`)

        res.setHeader('Access-Control-Allow-Origin', req.headers.origin)

        setTimeout(() => {

            res.write(JSON.stringify({

                success : true,
                data : response.data

            }))

            res.end()

        }, 3000)

    }).catch(error => {

        res.statusCode = 404
        res.write(JSON.stringify({

            success: false,
            message: 'Ocorreu um erro na solicitação das credenciais do Spotify. Por favor, verifique os dados e tente novamente',
            error

        }))

        res.end()

    })

})

/* */

server.listen(8888)
