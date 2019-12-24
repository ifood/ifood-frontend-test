import React from 'react'
import axios from 'axios'
import {

    CSSTransition

} from 'react-transition-group'
import _lang from 'lodash/lang'

/* */

import Icons from 'components/Icon/Icons'
import Icon from 'components/Icon/Icon'
import Button from 'components/Button/Button'
import Menu from 'layout/Menu/Menu'
import Header from 'layout/Header/Header'
import PlaylistList from 'components/Playlist/PlaylistList'
import Modal from 'components/Modal/Modal'

/* */

import styles from 'App.module.scss'

/* */

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

                message : null,
                items: []

            },

            viewport : {

                width: 0

            },

            settings : {

                active : false,
                data : {

                    country : 'BR',
                    locale: 'pt_BR'

                },
                temp : {}

            },

            auth : null

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

        await this.init()

    }

    async componentDidUpdate(prevProps, prevState){

        if(!_lang.isEqual(prevState.settings.data, this.state.settings.data)) await this.init()

    }

    /* */

    init(){

        return Promise.resolve().then(() => {

            return this.getToken()

        }).then(() => {

            return this.getFeaturedPlaylists()

        }).then(() => {

            return this.getNewReleases()

        }).catch(error => {

            console.log(error)

        })

    }

    async getToken(){

        return axios.get(`http://localhost:8888`).then(response => {

            this.setState({

                auth : response.data.data.access_token

            })

        })

    }

    async getFeaturedPlaylists(){

        let query = [

            `locale=${this.state.settings.data.locale}`,
            `country=${this.state.settings.data.country}`

        ].join('&')

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

        })

    }

    async getNewReleases(){

        let query = [

            `country=${this.state.settings.data.country}`

        ].join('&')

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
                    uri: val.uri || val.external_urls.spotify

                }

            })

            items.unshift({})

            this.setState({

                releases : {

                    message : this.getNewReleasesMessage(this.state.settings.data.locale),
                    items

                }

            })

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
                temp : this.state.settings.data,
                active : true

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

        if(type == 'country'){

            temp.country = e.target.value

        } else if(type == 'locale'){

            temp.locale = e.target.value

        }

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

            settings : {

                ...this.state.settings,
                data : this.state.settings.temp,
                temp : {},
                active : false

            }

        })

    }

    /* */

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

            case 'en_US' :

                return 'Nuevos Lanzamientos'

            break;

            default :

                return 'Lançamentos'

        }

    }

    /* */

    render(){

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

                            <div className="row mb-4">

                                <div className="col">

                                    <div className="row align-items-center">

                                        <div className="col">

                                            <label htmlFor="country" className={ styles.FormLabel }>Exibir playlists do país</label>

                                        </div>

                                        <div className="col-5">

                                            <select

                                            className={ styles.FormInput }
                                            name="country"
                                            value={ this.state.settings.temp.country }
                                            onChange={ e => this.changeSettings(e, 'country') }

                                            >

                                                <option value="AU">Austrália</option>
                                                <option value="DE">Alemanha</option>
                                                <option value="BR">Brasil</option>
                                                <option value="PT">Portugal</option>
                                                <option value="en_US">EUA</option>
                                                <option value="RU">Rússia</option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="row mb-4">

                                <div className="col">

                                    <div className="row align-items-center">

                                        <div className="col">

                                            <label htmlFor="locale" className={ styles.FormLabel }>Idioma</label>

                                        </div>

                                        <div className="col-5">

                                            <select

                                            className={ styles.FormInput }
                                            name="locale"

                                            value={ this.state.settings.temp.locale }
                                            onChange={ e => this.changeSettings(e, 'locale') }

                                            >

                                                <option value="en_AU">en_AU</option>
                                                <option value="de_DE">de_DE</option>
                                                <option value="pt_BR">pt_BR</option>
                                                <option value="fr_FR">fr_FR</option>
                                                <option value="en_US">en_US</option>
                                                <option value="es_AR">es_AR</option>

                                            </select>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="row justify-content-center mt-5">

                                <div className="col-auto">

                                    <Button label="Salvar" color="green" onClick={ () => this.applySettings() } />

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
