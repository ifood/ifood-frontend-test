import React from 'react'
import axios from 'axios'
import {

    CSSTransition

} from 'react-transition-group'

/* */

import Icons from 'components/Icon/Icons'
import Icon from 'components/Icon/Icon'
import Menu from 'layout/Menu/Menu'
import Header from 'layout/Header/Header'
import PlaylistList from 'components/Playlist/PlaylistList'
import Modal from 'components/Modal/Modal'

/* */

import styles from 'App.module.scss'

/* */

var auth = 'BQDTEBEo0ktNZeep6nHIeqzm6X4bC0xv6DYvw3Gch2MVdEWrLwqBlLU7VkwP67ZcqX-PIG-BPpt7r37hwuw'

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

            },

            settings : {

                active : true,
                data : {

                    country : 'BR',
                    locale: 'pt_BR'

                },
                temp : {}

            }

        }

        /* */

        this.AppVierRef = React.createRef()

    }

    /* */

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

    /* */

    async getFeaturedPlaylists(){

        let query = [

            `locale=${this.state.settings.data.locale}`,
            `country=${this.state.settings.data.country}`

        ].join('&')

        /* */

        return axios.get(`https://api.spotify.com/v1/browse/featured-playlists?${query}&limit=50`, {

            headers : {

                Authorization: `Bearer ${auth}`

            }

        }).then(response => {

            let items = response.data.playlists.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    img : val.images[0].url,
                    owner : val.owner.display_name,
                    uri: val.uri || val.external_urls.spotify

                }

            })

            items.unshift({})

            /* */

            this.setState({

                featured : {

                    message : response.data.message,
                    items

                }

            })

        }).catch(error => {

            console.log(error)

        })

    }

    async getNewReleases(){

        let query = [

            `country=${this.state.settings.data.country}`

        ].join('&')

        /* */

        return axios.get(`https://api.spotify.com/v1/browse/new-releases?${query}&limit=50`, {

            headers : {

                Authorization: `Bearer ${auth}`

            }

        }).then(response => {

            let items = response.data.albums.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    img : val.images[0].url,
                    owner : val.artists.map(({ name }) => name).join(', '),
                    uri: val.uri || val.external_urls.spotify

                }

            })

            items.unshift({})

            this.setState({

                releases : {

                    ...this.state.releases,
                    items

                }

            })

        }).catch(error => {

            console.log(error)

        })

    }

    setViewportWidth(width){

        this.setState({

            viewport : {

                ...this.state.viewport,
                width: width ? width : this.AppVierRef.current.offsetWidth

            }

        })

    }

    handleWrapperScroll(e){

        this.setState({

            wrapperScrollTop: e.target.scrollTop

        })

    }

    openSettings(){

        this.setState({

            settings : {

                ...this.state.settings,
                active : true

            }

        })

    }

    closeSettings(){

        this.setState({

            settings : {

                ...this.state.settings,
                active : false

            }

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

                    <Header

                    opaque={ this.state.wrapperScrollTop > 10 }

                    openSettings={ () => this.openSettings() }

                    />

                    <div className={ styles.AppView } ref={ this.AppVierRef }>

                        <Icon glyph="logo-play-button" className={ styles.AppViewBackground } />

                        <PlaylistList data={ this.state.featured } viewport={ this.state.viewport.width } />
                        <PlaylistList data={ this.state.releases } viewport={ this.state.viewport.width } />

                    </div>

                </div>

                <CSSTransition

                in={ this.state.settings.active }
                timeout={ 200 }
                classNames="transition-fade"
                unmountOnExit

                >

                    <Modal title="Preferências" col="6" onClose={ () => this.closeSettings( )}>

                        <div className={ styles.AppSettings }>

                            <div className="row">

                                <div className="col">

                                    <label htmlFor="country" className={ styles.FormLabel }>Exibir playlists do país</label>
                                    <input type="text" id="country" />

                                </div>

                            </div>

                            <div className="row">

                                <div className="col">

                                    <label htmlFor="locale" className={ styles.FormLabel }>Idioma</label>
                                    <input type="text" id="locale" />

                                </div>

                            </div>

                        </div>

                    </Modal>

                </CSSTransition>

            </div>

        )

    }

}

export default App
