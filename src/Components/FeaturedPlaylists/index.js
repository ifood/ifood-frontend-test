import React, {useState, useEffect} from 'react'

import playlistsApi from '../../Services/playlists-api'

import { Container } from './styles.js'

export default function FeaturedPlaylist(){
    const params = getHashParams()
    const [logged, setLogged] = useState(params.access_token ? true : false)
    const [playlists, setPlaylists] = useState([])
    
    //função disponibilizada pelo Spotify para pegar os parâmetros
    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }

    useEffect(() => {
        async function Teste(){
            if(params.access_token){
                await playlistsApi.get('/', {
                    headers: {
                        Authorization: `Bearer ${params.access_token}`
                    }
                })
                .then((response) => {
                    setPlaylists(response.data.playlists.items)
                    console.log(response.data.playlists.items)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
        Teste()
    },[])

    return(
        <Container>
            {logged ?
                <div>
                    {playlists.map(item =>
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    )}
                </div>
                : <a href="http://localhost:8888">Login com o spotify</a>
            }
        </Container>
    )
}