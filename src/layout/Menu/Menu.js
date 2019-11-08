import React from 'react'

/* */

import Icon from 'components/Icon/Icon'

/* */

import styles from './Menu.module.scss'

/* */

class Menu extends React.Component {

    render(){

        return (

            <div className={ styles.Menu }>

                <div className={ styles.MenuLogo }>

                    <Icon className={ styles.MenuLogoIcon } glyph="logo-play-button" />
                    SpotiFood

                </div>

            </div>

        )

    }

}

export default Menu
