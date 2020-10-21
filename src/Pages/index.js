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
    const [search, setSearch] = useState()
    const [logged, setLogged] = useState(params.access_token ? true : false)
    const [playlists, setPlaylists] = useState()
    const [filteredPlaylists, setFilteredPlaylists] = useState({})
    const [totalPlaylists, setTotalPlaylists] = useState()
    const [loading, setLoading] = useState(true)

    //busca dos filtros
    useEffect(() => {
        filtersApi.get('/')
        .then(response =>{
            setFilters(response.data.filters)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    function handleSearchChange(event){
        setSearch(event.target.value)
    }

    useEffect(() => {
        if(playlists){
            setFilteredPlaylists(playlists.filter(playlist => playlist.name.indexOf(search) !== -1))
        }
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

    // requisição a api assim que a tela é carregada pela primeira vez
    useEffect(() => {
        setLoading(true)
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
                    setFilteredPlaylists(response.data.playlists.items)                 
                    setTotalPlaylists(response.data.playlists.total)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            setLoading(false)
        }
        Teste()
    },[])

    /*setInterval(() => {
        let token = localStorage.getItem("token")
        playlistsApi.get('/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setPlaylists(response.data.playlists.items)
        })
        .catch((err) => {
            console.log(err)
        })
    }, 30000)*/

    return(
        <div>
            <Header filters={filters} search={search} handleSearchChange={handleSearchChange}/>
            <FeaturedPlaylist loading={loading} playlists={filteredPlaylists} total={totalPlaylists} logged={logged}/>
        </div>
    )
}