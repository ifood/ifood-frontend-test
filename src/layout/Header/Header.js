import React from 'react'

/* */

import Icon from 'components/Icon/Icon'

/* */

import styles from './Header.module.scss'

/* */

class Header extends React.Component {

    constructor(props){

        super(props)

        this.state = {

            search : ''

        }

    }

    render(){

        return (

            <div className={

                [

                    styles.Header,
                    this.props.opaque && styles.HeaderOpaque

                ].join(' ')

            }>

                <div className="row no-gutters align-items-center flex-fill">

                    <div className="col-auto pr-5">

                        <div className={ styles.HeaderLogo }>

                            <Icon className={ styles.HeaderLogoIcon } glyph="logo-play-button" />
                            SpotiFood

                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className={ styles.HeaderSearch }>

                            <input

                            className={ styles.HeaderSearchInput }

                            type="text"
                            placeholder="Faça uma busca..."

                            value={ this.state.search }
                            onChange={ e => {

                                this.setState({

                                    search : e.target.value

                                })

                            }}

                            />

                            <Icon className={ styles.HeaderSearchIcon } glyph="search" />

                        </div>

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

                                <div className="col-auto pr-3">

                                    <div className={ styles.HeaderUserAvatar } style={{

                                        backgroundImage : `url(https://instagram.fcpq4-1.fna.fbcdn.net/vp/2262713f6589496277cc40d9996c0a39/5E5970B4/t51.2885-19/s150x150/51665111_345764132699496_3471795650755035136_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net)`

                                    }}></div>

                                </div>

                                <div className="col">

                                    <div className={ styles.HeaderUserInfo }>

                                        <div className={ styles.HeaderUserName }>Dian Carlos</div>
                                        <div className={ styles.HeaderUserEmail }>dian.cabral@gmail.com</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}

export default Header
