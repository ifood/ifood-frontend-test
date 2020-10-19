import React, {useState, useEffect} from 'react'
import Spotify from 'spotify-web-api-js'

import filtersApi from '../Services/filters-api.js'
import playlistsApi from '../Services/playlists-api'

import Header from '../Components/Header'
import FeaturedPlaylist from '../Components/FeaturedPlaylists'

const spotifyWebApi = new Spotify()

export default function Index(){
    const params = getHashParams()
    const [filters, setFilters] = useState([])    
    const [search, setSearch] = useState('')
    const [logged, setLogged] = useState(params.access_token ? true : false)
    const [playlists, setPlaylists] = useState([])
    
    //busca dos filtros
    useEffect(() => {
        filtersApi.get('/')
        .then(response =>{
            setFilters(response.data.filters)
            console.log(response.data.filters)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    function handleSearchChange(event){
        setSearch(event.target.value)
    }

    useEffect(() => {
        
    },[search])
    
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
                localStorage.setItem("token", params.access_token)
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
    },[params])

    setInterval(() => {
        let token = localStorage.getItem("token")
        playlistsApi.get('/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setPlaylists(response.data.playlists.items)
                console.log(response.data.playlists.items)
        })
        .catch((err) => {
            console.log(err)
        })
    }, 30000)

    return(
        <div>
            <Header filters={filters} search={search} handleSearchChange={handleSearchChange}/>
            <FeaturedPlaylist playlists={playlists} logged={logged}/>
        </div>
    )
}