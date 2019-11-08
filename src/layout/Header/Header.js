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

            <div className={ styles.Header }>

                <div className="row no-gutters align-items-center flex-fill">

                    <div className="col-lg-3">

                        <div className={ styles.HeaderSearch }>

                            <input

                            className={ styles.HeaderSearchInput }

                            type="text"
                            placeholder="Busque por uma playlist aqui..."

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

                </div>

            </div>

        )

    }

}

export default Header
