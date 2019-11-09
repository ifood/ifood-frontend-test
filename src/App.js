import React from 'react'
import axios from 'axios'

/* */

import Icons from 'components/Icon/Icons'
import Menu from 'layout/Menu/Menu'
import Header from 'layout/Header/Header'
import PlaylistList from 'components/Playlist/PlaylistList'

/* */

import styles from 'App.module.scss'

/* */

var auth = 'BQCvYK5Py6Kze8XogD5Ron--wnYqM5uOXU_p6muwwWWVT905VT9nYbTx2HjIFLsaFVT2_T56PXI-5u46sSw'

class App extends React.Component {

    constructor(){

        super()

        this.state = {

            wrapperScrollTop : 0,
            featured : {

                message : null,
                items: []

            },

            releases : {

                message : 'Lançamentos',
                items: []

            },

            viewport : {

                width: 0

            }

        }

        /* */

        this.AppVierRef = React.createRef()

    }

    /* */

    async getFeaturedPlaylists(){

        return axios.get('https://api.spotify.com/v1/browse/featured-playlists?locale=pt_BR&country=BR&limit=50', {

            headers : {

                Authorization: `Bearer ${auth}`

            }

        }).then(response => {

            this.setState({

                featured : {

                    message : response.data.message,
                    items : response.data.playlists.items.map(val => {

                        return {

                            id: val.id,
                            title : val.name,
                            img : val.images[0].url,
                            owner : val.owner.display_name,
                            uri: val.uri || val.external_urls.spotify

                        }

                    })

                }

            })

        }).catch(error => {

            console.log(error)

        })

    }

    async getNewReleases(){

        return axios.get('https://api.spotify.com/v1/browse/new-releases?country=BR&limit=50', {

            headers : {

                Authorization: `Bearer ${auth}`

            }

        }).then(response => {

            this.setState({

                releases : {

                    ...this.state.releases,
                    items : response.data.albums.items.map(val => {

                        return {

                            id: val.id,
                            title : val.name,
                            img : val.images[0].url,
                            owner : val.artists.map(({ name }) => name).join(', '),
                            uri: val.uri || val.external_urls.spotify

                        }

                    })

                }

            })

        }).catch(error => {

            console.log(error)

        })

    }

    async componentDidMount(){

        this.setViewportWidth()

        let viewportObserver = new ResizeObserver(entries => {

            let width = entries[0].contentRect.width

            if(this.state.viewport.width !== width) this.setViewportWidth(width)

        })

        viewportObserver.observe(this.AppVierRef.current)

        /* */

        await this.getFeaturedPlaylists()
        await this.getNewReleases()

    }

    setViewportWidth(width){

        this.setState({

            viewport : {

                ...this.state.viewport,
                width: width ? width : this.AppVierRef.current.offsetWidth

            }

        })

    }

    /* */

    handleWrapperScroll(e){

        this.setState({

            wrapperScrollTop: e.target.scrollTop

        })

    }

    /* */

    render(){

        /* */

        return (

            <div className={ styles.App }>

                <Icons />

                <div

                className={ styles.AppWrapper }

                onScroll={ e => this.handleWrapperScroll(e) }

                >

                    <Header opaque={ this.state.wrapperScrollTop > 10 } />

                    <div className={ styles.AppView } ref={ this.AppVierRef }>

                        <PlaylistList data={ this.state.featured } viewport={ this.state.viewport.width } />
                        <PlaylistList data={ this.state.releases } viewport={ this.state.viewport.width } />

                    </div>

                </div>

            </div>

        )

    }

}

export default App
