import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import {

    CSSTransition

} from 'react-transition-group'
import _lang from 'lodash/lang'

/* */

import Icons from 'components/Icon/Icons'
import Icon from 'components/Icon/Icon'
import Button from 'components/Button/Button'
import Header from 'layout/Header/Header'
import PlaylistList from 'components/Playlist/PlaylistList'
import Modal from 'components/Modal/Modal'
import Confirm from 'components/Confirm/Confirm'

/* */

import styles from 'App.module.scss'

/* */

import { AddPlaylistItems } from 'state/actions/Playlist'
import { SetAuth } from 'state/actions/Auth'

/* */

const STORAGE_SETTINGS_HASH = 'kdap3WzWLmO5eeZuY4U8Opx9wJwnXKW7'

/* */

class App extends React.Component {

    constructor(){

        super()

        this.state = {

            ready : false,
            error : false,

            wrapperScrollTop : 0,
            featured : {

                message : null,
                loading : true,
                items: []

            },

            releases : {

                message : null,
                loading : true,
                items: []

            },

            categories : {

                message : null,
                loading : true,
                items: []

            },

            viewport : {

                width: 0

            },

            settings : {

                active : false,
                data : {

                    country : 'BR',
                    locale: 'pt_BR',
                    theme: 'theme--dark',
                    timestamp : null

                },
                temp : {},
                filters : [],
                loaded : false

            },

            auth : null

        }

        /* */

        this.ConfirmRef = React.createRef()

        this.AppViewRef = React.createRef()
        this.AppWrapperRef = React.createRef()

        /* */

        this.timer = null

    }

    /* */

    async componentDidMount(){

        this.setViewportWidth()

        let viewportObserver = new ResizeObserver(entries => {

            // let width = entries[0].contentRect.width
            let width = this.AppViewRef.current.offsetWidth

            if(this.state.viewport.width !== width) this.setViewportWidth(width)

        })

        viewportObserver.observe(this.AppViewRef.current)

        /* */

        // await this.initPlayer().then(() => {
        //
        //     window.onSpotifyWebPlaybackSDKReady = () => {
        //
        //       const player = new window.Spotify.Player({
        //
        //         name: 'Web Playback SDK Quick Start Player',
        //         getOAuthToken: cb => { cb(this.auth) },
        //         volume : 0.5
        //
        //       });
        //
        //       // Error handling
        //       player.addListener('initialization_error', ({ message }) => { console.error(message); });
        //       player.addListener('authentication_error', ({ message }) => { console.error(message); });
        //       player.addListener('account_error', ({ message }) => { console.error(message); });
        //       player.addListener('playback_error', ({ message }) => { console.error(message); });
        //
        //       // Playback status updates
        //       player.addListener('player_state_changed', state => { console.log(state); });
        //
        //       // Ready
        //       player.addListener('ready', ({ device_id }) => {
        //         console.log('Ready with Device ID', device_id);
        //       });
        //
        //       // Not Ready
        //       player.addListener('not_ready', ({ device_id }) => {
        //         console.log('Device ID has gone offline', device_id);
        //       });
        //
        //       // Connect to the player!
        //       player.connect();
        //
        //     }
        //
        // })

        /* */

        if(localStorage.getItem(STORAGE_SETTINGS_HASH)){

            let settings = JSON.parse(localStorage.getItem(STORAGE_SETTINGS_HASH))

            this.setState({

                settings : {

                    ...this.state.settings,
                    data : settings

                }

            })

        } else {

            // this.setThemeColor(this.state.settings.data.theme)
            //
            // await this.init()

        }

        /* */

        this.initTimer()

    }

    async componentDidUpdate(prevProps, prevState){

        let

        prevDataSettings = JSON.parse(JSON.stringify(prevState.settings.data)),
        newDataSettings = JSON.parse(JSON.stringify(this.state.settings.data))

        if((prevDataSettings.theme !== newDataSettings.theme) || !this.state.ready){

            this.setThemeColor(newDataSettings.theme)

        }

        delete prevDataSettings.theme
        delete newDataSettings.theme

        /* */

        if(!_lang.isEqual(prevDataSettings, newDataSettings) || !this.state.ready){

            await this.init()

        }

    }

    /* */

    async getToken(){

        this.setState({

            featured : {

                ...this.state.featured,
                loading: true

            },

            releases : {

                ...this.state.releases,
                loading: true

            },

            categories : {

                ...this.state.categories,
                loading: true

            }

        })

        /* */

        return axios.get(`http://localhost:8888`).then(response => {

            this.setState({

                auth : response.data.data.access_token

            })

        })

    }

    async getFilterOptions(){

        if(!this.state.settings.loaded){

            return axios.get(`http://www.mocky.io/v2/5a25fade2e0000213aa90776`).then(response => {

                let options = response.data.filters

                options.forEach(val => {

                    switch(val.id){

                        case 'locale' :
                        case 'country' :
                        case 'timestamp' :

                            this.setState({

                                settings : {

                                    ...this.state.settings,
                                    filters : [

                                        ...this.state.settings.filters,
                                        val

                                    ]

                                }

                            })

                        break;

                    }

                })

                // this.setState({
                //
                //     auth : response.data.data.access_token
                //
                // })

                this.setState({

                    settings : {

                        ...this.state.settings,
                        loaded : true

                    }

                })

            })

        }

    }

    async getFeaturedPlaylists(){

        this.setState({

            featured : {

                ...this.state.featured,
                loading: true

            }

        })

        /* */

        let query = [

            this.state.settings.data.locale && `locale=${this.state.settings.data.locale}`,
            this.state.settings.data.country && `country=${this.state.settings.data.country}`,
            this.state.settings.data.timestamp && `timestamp=${this.state.settings.data.timestamp}:00`

        ].filter(Boolean).join('&')

        /* */

        return axios.get(`https://api.spotify.com/v1/browse/featured-playlists?${query}&limit=50`, {

            headers : {

                Authorization: `Bearer ${this.state.auth}`

            }

        }).then(response => {

            let items = response.data.playlists.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    img : val.images[0].url,
                    owner : val.owner.display_name,
                    uri: val.uri || val.external_urls.spotify,
                    type: 'playlist'

                }

            })

            items.unshift({})

            /* */

            this.setState({

                featured : {

                    message : response.data.message,
                    loading: false,
                    items

                }

            })

        })

    }

    async getNewReleases(){

        this.setState({

            releases : {

                ...this.state.releases,
                loading: true

            }

        })

        /* */

        let query = [

            this.state.settings.data.country && `country=${this.state.settings.data.country}`

        ].filter(Boolean).join('&')

        /* */

        return axios.get(`https://api.spotify.com/v1/browse/new-releases?${query}&limit=50`, {

            headers : {

                Authorization: `Bearer ${this.state.auth}`

            }

        }).then(response => {

            let items = response.data.albums.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    img : val.images[0].url,
                    owner : val.artists.map(({ name }) => name).join(', '),
                    uri: val.uri || val.external_urls.spotify,
                    type: 'album'

                }

            })

            items.unshift({})

            this.setState({

                releases : {

                    message : this.getNewReleasesMessage(this.state.settings.data.locale),
                    loading: false,
                    items

                }

            })

        })

    }

    async getCategories(){

        this.setState({

            categories : {

                ...this.state.categories,
                loading: true

            }

        })

        /* */

        let query = [

            this.state.settings.data.country && `country=${this.state.settings.data.country}`,
            this.state.settings.data.locale && `locale=${this.state.settings.data.locale}`

        ].filter(Boolean).join('&')

        /* */

        return axios.get(`https://api.spotify.com/v1/browse/categories?${query}&limit=50`, {

            headers : {

                Authorization: `Bearer ${this.state.auth}`

            }

        }).then(response => {

            let items = response.data.categories.items.map(val => {

                return {

                    id: val.id,
                    title : val.name,
                    owner : 'Spotify',
                    img : val.icons[0].url,
                    uri: val.href,
                    type: 'category'

                }

            })

            items.unshift({})

            this.setState({

                categories : {

                    message : this.getCategoriesMessage(this.state.settings.data.locale),
                    loading: false,
                    items

                }

            })

        })

    }

    /* */

    init(){

        this.setState({

            ready : true,
            error : false

        })

        /* */

        return Promise.resolve().then(() => {

            return this.getToken()

        }).then(() => {

            this.getFilterOptions()

        }).then(() => {

            return this.getFeaturedPlaylists()

        }).then(() => {

            return this.getNewReleases()

        }).then(() => {

            return this.getCategories()

        }).then(() => {

            this.props.AddPlaylistItems([

                ...this.state.featured.items,
                ...this.state.releases.items,
                ...this.state.categories.items

            ])

        }).catch(error => {

            this.setState({

                error: true

            })

            this.ConfirmRef.current.open(`<b>Ocorreu um erro ao solicitar os dados do Spotify</b></br>${ error.response.data.error.message }`, `Abrir Preferências`).then(() => {

                this.openSettings(false)

            }).catch(() => false)

        })

    }

    initTimer(){

        this.timer = setInterval(() => {

            this.init()

        }, 30000)

    }

    initPlayer(){

        return new Promise((resolve, reject) => {

            const script = document.createElement('script')

            /* */

            script.type = 'text/javascript'
            // script.async = true
            script.src = 'https://sdk.scdn.co/spotify-player.js'

            script.onload = () => resolve()

            document.body.appendChild(script)

        })

    }

    setViewportWidth(width){

        this.setState({

            viewport : {

                ...this.state.viewport,
                width: width ? width : this.AppViewRef.current.offsetWidth

            }

        })

    }

    setThemeColor(color){

        let documentBody = document.querySelector('body')

        documentBody.removeAttribute('class')
        documentBody.classList.add(color)

    }

    handleWrapperScroll(e){

        if(this.AppWrapperRef.current === e.target){

            this.setState({

                wrapperScrollTop: e.target.scrollTop

            })

            this.handleTimer()

        }

    }

    handleTimer(e){

        if(this.timer){

            clearInterval(this.timer)

            this.initTimer()

        }

    }

    openSettings(close){

        this.setState({

            settings : {

                ...this.state.settings,
                temp : this.state.settings.data,
                active : true,
                close : !!close

            }

        })

    }

    closeSettings(){

        this.setState({

            settings : {

                ...this.state.settings,
                active : false,
                temp : {}

            }

        })

    }

    changeSettings(e, type){

        let temp = JSON.parse(JSON.stringify(this.state.settings.temp))

        /* */

        temp[type] = e.target.value

        /* */

        this.setState({

            settings : {

                ...this.state.settings,
                temp

            }

        })

    }

    applySettings(){

        this.setState({

            ready: !this.state.error,

            settings : {

                ...this.state.settings,
                data : this.state.settings.temp,
                temp : {},
                active : false

            }

        }, () => {

            localStorage.setItem(STORAGE_SETTINGS_HASH, JSON.stringify(this.state.settings.data))

        })

    }

    getNewReleasesMessage(locale){

        switch(locale){

            case 'en_AU' :
            case 'en_US' :

                return 'New Releases'

            break;

            case 'de_DE' :

                return 'Neuerscheinungen'

            break;

            case 'fr_FR' :

                return 'Nouvelles Versions'

            break;

            default :

                return 'Lançamentos'

        }

    }

    getCategoriesMessage(locale){

        switch(locale){

            case 'en_AU' :
            case 'en_US' :

                return 'Categories'

            break;

            case 'de_DE' :

                return 'Kategorien'

            break;

            case 'fr_FR' :

                return 'Catégories'

            break;

            default :

                return 'Categorias'

        }

    }

    /* */

    render(){

        return (

            <div

            className={ styles.App }

            onMouseMove={ e => this.handleTimer() }
            onClick={ e => this.handleTimer() }
            onKeyDown={ e => this.handleTimer() }

            >

                <Icons />

                <div

                className={ styles.AppWrapper }

                onScroll={ e => this.handleWrapperScroll(e) }
                ref={ this.AppWrapperRef }

                >

                    <Header

                    opaque={ this.state.wrapperScrollTop > 10 }

                    openSettings={ () => this.openSettings(true) }
                    searchInput={ () => this.handleTimer() }

                    />

                    <div className={ styles.AppView } ref={ this.AppViewRef }>

                        <Icon glyph="logo-play-button" className={ styles.AppViewBackground } />

                        <PlaylistList data={ this.state.featured } viewport={ this.state.viewport.width } />
                        <PlaylistList data={ this.state.releases } viewport={ this.state.viewport.width } />
                        <PlaylistList data={ this.state.categories } viewport={ this.state.viewport.width } />

                    </div>

                </div>

                <CSSTransition

                in={ this.state.settings.active }
                timeout={ 200 }
                classNames="transition-fade"
                unmountOnExit

                >

                    <Modal

                    title="Preferências"
                    close={ this.state.settings.close }

                    colXl="4"
                    colLg="6"
                    colMd="6"
                    col="11"

                    onClose={ () => this.closeSettings( )}

                    >

                        <div className={ styles.AppSettings }>

                            <form action="#" onSubmit={ e => {

                                e.preventDefault()

                                this.applySettings()

                            }}>

                                {

                                    this.state.settings.filters.map((val, index) => (

                                        <div className="row mb-4" key={ index }>

                                            <div className="col">

                                                <div className="row align-items-center">

                                                    <div className="col-12 col-sm">

                                                        <label htmlFor={ val.id } className={ styles.FormLabel }>{ val.name }</label>

                                                    </div>

                                                    <div className="col-12 col-sm-5">

                                                        {

                                                            ['country', 'locale'].includes(val.id) ? (

                                                                <select

                                                                className={ styles.FormInput }
                                                                name={ val.id }
                                                                value={ this.state.settings.temp[val.id] }
                                                                onChange={ e => this.changeSettings(e, val.id) }

                                                                >

                                                                    {

                                                                        val.values.map((val, index) => (

                                                                            <option value={ val.value } key={ index }>{ val.name }</option>

                                                                        ))

                                                                    }

                                                                </select>

                                                            ) : null

                                                        }

                                                        {

                                                            ['timestamp'].includes(val.id) ? (

                                                                <input

                                                                className={ styles.FormInput }
                                                                value={ this.state.settings.temp[val.id] }
                                                                onChange={ e => this.changeSettings(e, val.id) }

                                                                type="datetime-local"

                                                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"

                                                                />

                                                            ) : null

                                                        }

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                }

                                <div className="row mb-4">

                                    <div className="col">

                                        <div className="row align-items-center">

                                            <div className="col-12 col-sm">

                                                <label htmlFor="theme" className={ styles.FormLabel }>Cor do Tema</label>

                                            </div>

                                            <div className="col-12 col-sm-5">

                                                <select

                                                className={ styles.FormInput }
                                                name="theme"

                                                value={ this.state.settings.temp.theme }
                                                onChange={ e => this.changeSettings(e, 'theme') }

                                                >

                                                    <option value="theme--light">Claro</option>
                                                    <option value="theme--light--high-contrast">Claro (Alto Contraste)</option>
                                                    <option value="theme--dark">Escuro</option>
                                                    <option value="theme--dark--high-contrast">Escuro (Alto Contraste)</option>

                                                </select>


                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="row justify-content-center mt-5">

                                    <div className="col-auto">

                                        <Button label="Salvar" color="green" type="submit" />

                                    </div>

                                </div>

                            </form>

                        </div>

                    </Modal>

                </CSSTransition>

                <Confirm ref={ this.ConfirmRef } />

            </div>

        )

    }

}

/* */

export default connect(null, dispatch => bindActionCreators({ AddPlaylistItems, SetAuth }, dispatch))(App)
