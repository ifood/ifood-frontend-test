import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import Search from './Search'
import FilterPlaylists from './FilterPlaylists'

class Playlists extends Component {
    state = {
        playlistName: '',
        searchResult: []
    }

    handleSearch = (searchText) => {
        const { playlists } = this.props
        const result =  playlists.filter(item => item.name.toLowerCase().startsWith(searchText))
        this.setState({
            ...this.state,
            searchResult: result
        })
    }

    handleSearchChange = (e) => {
        const { name, value } = e.target

        this.setState({
            ...this.state,
            [name]: value
        }, () => {
            this.handleSearch(value.toLowerCase())
        })
    }

    render() {
        const {
            playlists,
            playlistsFilters,
            handleChange,
            value
        } = this.props
        const { searchResult } = this.state

        const playlistsToDisplay = (searchResult && searchResult.length > 0) ? searchResult : playlists

        return (
            <>{playlistsToDisplay &&
                playlistsToDisplay.length > 0 &&
                <>
                <div className="main-container">
                    <Search
                        handleSearchChange={this.handleSearchChange}
                    />
                    <FilterPlaylists
                        playlistsFilters={playlistsFilters}
                        handleChange={handleChange}
                        value={value}
                    />
                    <div className='playlists-container'>
                        {playlistsToDisplay &&
                            playlistsToDisplay.map((item) => (
                                <Card className='playlist-card' key={item.id}>
                                    <Image
                                        className='playlist-card__playlist-image'
                                        src={`${item.images[0].url}`} wrapped ui={false}
                                    />
                                    <div className="playlist-card__playlist-content">
                                        <h3 className="playlist-name">{item.name}</h3>
                                        <p className="playlist-description">{item.description}</p>
                                        <p className='tracks'>{`${item.tracks.total} Songs`}</p>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </>}
            </>
        );
    }
}
 
export default Playlists;
