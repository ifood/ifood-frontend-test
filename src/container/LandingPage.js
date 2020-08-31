import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/layouts/Header'
import Playlists from '../components/Playlists/Playlists'
import Footer from '../components/layouts/Footer'
import { Dimmer, Loader } from 'semantic-ui-react'
import { fetchPlaylists } from '../actions/playlists';
import { fetchPlaylistsFilters } from '../actions/filterPlaylists';
import convertToIso from '../helpers/convertToIso'


class LandingPage extends Component {
    state = {
        filters: {
            locale: null,
            country: null,
            limit: null,
            timestamp: null,
            offset: null
        }
    }

    updatingState = (name, value) => {
        if(value === ''){
            return null
        }
        if(name === 'timestamp'){
            return convertToIso(value)
        }else{
            return value
        }
    }
     

    handleChange = (_, data) => {
        const { fetchPlaylists } = this.props;
        const { filters } = this.state
            this.setState({
                filters: {
                    ...filters,
                    [_&& _.target.name] : _ && this.updatingState(_.target.name, _.target.value),
                    [data && data.name]: data ? data.value : _.target.value
                }
            }, () => {
                console.log('Byagenze gute???', this.state.filters)
                fetchPlaylists(this.state.filters)
            })
        
    }

    componentDidMount () {
        const { fetchPlaylists, fetchPlaylistsFilters } = this.props;
        fetchPlaylistsFilters()
        fetchPlaylists()
        setInterval(() => fetchPlaylists(), 30000)
    }

    render() { 
        const {playlists, error, icon, playlistsFilters} = this.props;
        const { filters } = this.state
        if( error && error.error.status === 401){
            window.location.replace('http://localhost:3006/')
        }
        return (
            <div>
                {playlists &&
                playlists.length > 0 ?
                <>
                    <Header icon={icon}/>
                    <Playlists
                        playlists={playlists}
                        playlistsFilters={playlistsFilters}
                        handleChange={this.handleChange}
                        value={filters}
                    />
                    <Footer />
                </>:
                <>
                <Dimmer active>
                    <Loader size='medium'>Loading</Loader>
                </Dimmer>
                <Header headersize='cover' icon={icon}/>
                </>
                
                }
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    playlists: state.playlists.playlists,
    error: state.playlists.error,

    playlistsFilters: state.playlistsFilters.playlistsFilters
  });
  
export default connect(
    mapStateToProps, 
    {
        fetchPlaylists,
        fetchPlaylistsFilters 
})(LandingPage);
