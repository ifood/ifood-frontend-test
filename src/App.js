import React from 'react'

/* */

import Icons from 'components/Icon/Icons'
import Menu from 'layout/Menu/Menu'

/* */

import styles from 'App.module.scss'

/* */

class App extends React.Component {

    render(){

        return (

            <div className={ styles.App }>

                <Icons />

                <Menu />
                <Content />

            </div>

        )

    }

}

export default App
