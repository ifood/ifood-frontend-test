import React from 'react'
import PropTypes from 'prop-types'

/* */

import styles from './Button.module.scss'

/* */

class Button extends React.Component {

    colorDefault(){

        return /\d/.test(this.props.color) || this.props.color === 'white' || this.props.color === 'black' ? this.props.color : this.props.color + '-500'

    }

    withLabel(){

        return (this.props.label !== '' && true) || ''

    }

    /* */

    render(){

        const colorDefault = this.colorDefault()
        const withLabel = this.withLabel()

        /* */

        return (

            <button

            onClick={ this.props.onClick }

            className={

                [

                    styles.button,
                    withLabel && styles['button--padding']

                ].join(' ')

            } type={this.props.type} style={{

                color: !this.props.light ? 'white' : `var(--md-${colorDefault})`

            }}>

                <div className={ styles['button__background'] } style={{

                    backgroundColor: this.props.light ? `var(--md-grey-200)` : `var(--md-${colorDefault})`

                }}></div>

                { this.props.label }

            </button>

        )

    }

}

Button.propTypes = {

    disabled: PropTypes.bool,
    loading : PropTypes.bool,

    color   : PropTypes.string,

    light   : PropTypes.bool,
    icon    : PropTypes.string,
    full    : PropTypes.bool,
    small   : PropTypes.bool,

    label   : PropTypes.string,
    type    : PropTypes.string.isRequired

}

Button.defaultProps = {

    type: 'button',

    color: 'blue-500'

}

/* */

export default Button
