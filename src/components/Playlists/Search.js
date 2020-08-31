import React from 'react'
import { Input } from 'semantic-ui-react'


const Search = ({ handleSearchChange }) => {
    return (
        <div className="search-input-container">
            <Input
                name='playlistName'
                icon='search'
                placeholder='Search...'
                className="search-input"
                onChange={handleSearchChange}
            />
        </div>

    )
}

export default Search
