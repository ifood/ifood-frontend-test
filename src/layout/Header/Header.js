import React from 'react'
import {

    CSSTransition

} from 'react-transition-group'
import TextSearch from 'text-search'

/* */

import Icon from 'components/Icon/Icon'
import Button from 'components/Button/Button'
import MediaCard from 'components/MediaCard/MediaCard'

/* */

import styles from './Header.module.scss'

/* */

class Header extends React.Component {

    constructor(props){

        super(props)

        this.state = {

            search : ''

        }

        /* */

        this.searchInputRef = React.createRef()

    }

    /* */

    getItemsFiltered(){

        if(this.state.search.length){

            let keywords = this.state.search.split(' ').filter(Boolean)

            let items = this.props.search.filter(val => val.id).filter(({ title, owner }) => TextSearch.textMatch(keywords, title) || TextSearch.textMatch(keywords, owner))

            return items

        } else {

            return []

        }

    }

    /* */

    resetSearch(){

        this.setState({

            search: ''

        })

        /* */

        this.searchInputRef.current.focus()

    }

    /* */

    render(){

        const getItemsFiltered = this.getItemsFiltered()

        /* */

        return (

            <header className={

                [

                    styles.Header,
                    this.props.opaque && styles.HeaderOpaque

                ].join(' ')

            }>

                <div className="row no-gutters flex-nowrap align-items-center flex-fill">

                    <div className="col-auto pr-2 pr-lg-3">

                        <div className={ styles.HeaderLogo }>

                            <Icon className={ styles.HeaderLogoIcon } glyph="logo-play-button" />
                            SpotiFood

                        </div>

                    </div>

                    <div className="col-lg-4 pr-3 pr-lg-0">

                        <div className={

                            [

                                styles.HeaderSearch,
                                !!this.state.search.length && styles.HeaderSearchFilled

                            ].join(' ')

                         }>

                            <input

                            className={ styles.HeaderSearchInput }

                            type="text"
                            placeholder="Buscar"

                            value={ this.state.search }
                            onChange={ e => {

                                this.setState({

                                    search : e.target.value

                                })

                                this.props.searchInput(e.target.value)

                            }}

                            ref={ this.searchInputRef }

                            />

                            <Icon className={ styles.HeaderSearchIcon } glyph="search" />

                            {

                                !!this.state.search.length && (

                                    <div onClick={ () => this.resetSearch() } style={{ float: 'right' }}>

                                        <Icon className={ styles.HeaderSearchIconReset } glyph="close" />

                                    </div>

                                )

                            }

                        </div>

                        <CSSTransition

                        in={ !!this.state.search.length }
                        timeout={ 200 }
                        classNames="transition-fade"
                        unmountOnExit

                        >

                            <div className={ styles.HeaderSearchResults }>

                                <ul className={ styles.HeaderSearchResultsRow }>

                                    {

                                    !!getItemsFiltered.length ? getItemsFiltered.map((data, index) => {

                                        return (

                                            <li className={ styles.HeaderSearchResultsList } key={ data.id || index }>

                                                <MediaCard data={ data } />

                                            </li>

                                        )

                                    }) : (

                                        <div className={ styles.HeaderSearchResultsEmpty }>

                                            <div className={ styles.HeaderSearchResultsEmptyIcon }>

                                                <Icon glyph="find_in_page" />

                                            </div>

                                            <div className={ styles.HeaderSearchResultsEmptyDescription }>Não foi encontrado nenhum resultado para sua busca</div>

                                            <div className={ styles.HeaderSearchResultsEmptyReset }>

                                                <Button label="Limpar Busca" color="blue" small onClick={ () => this.resetSearch() } />

                                            </div>

                                        </div>

                                    )

                                    }

                                </ul>

                            </div>

                        </CSSTransition>

                    </div>

                    <div className="col"></div>

                    <div className="col-auto pr-3">

                        <div onClick={ () => this.props.openSettings() }>

                            <Icon className={ styles.HeaderUserSettings } glyph="settings" />

                        </div>

                    </div>

                    <div className="col-auto">

                        <div className={ styles.HeaderUser }>

                            <div className="row no-gutters align-items-center">

                                <div className="col-auto pr-md-3">

                                    <div className={ styles.HeaderUserAvatar } style={{

                                        backgroundImage : `url(https://instagram.fcpq4-1.fna.fbcdn.net/vp/2262713f6589496277cc40d9996c0a39/5E5970B4/t51.2885-19/s150x150/51665111_345764132699496_3471795650755035136_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net)`

                                    }}></div>

                                </div>

                                <div className="col d-none d-md-block">

                                    <div className={ styles.HeaderUserInfo }>

                                        <div className={ styles.HeaderUserName }>Dian Carlos</div>
                                        <div className={ styles.HeaderUserEmail }>dian.cabral@gmail.com</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>

        )

    }

}

export default Header
