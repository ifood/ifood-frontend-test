import React, {useState, useEffect} from 'react'

import filtersApi from '../Services/filters-api.js'
import Header from '../Components/Header'
import FeaturedPlaylist from '../Components/FeaturedPlaylists'

export default function Index(){
    const [filters, setFilters] = useState([])    
    const [search, setSearch] = useState('')

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

    return(
        <div>
            <Header filters={filters} search={search} handleSearchChange={handleSearchChange}/>
            <FeaturedPlaylist/>
        </div>
    )
}