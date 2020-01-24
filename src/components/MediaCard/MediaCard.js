import React from 'react'

/* */

import Icon from 'components/Icon/Icon'
import Cover from 'components/Cover/Cover'

/* */

import styles from './MediaCard.module.scss'

/* */

class MediaCard extends React.Component {

    render(){

        return (

            <div className={ styles.card }>

                <div className="row no-gutters align-items-center">

                    <div className="col-auto pr-3">

                        <div className={ styles.cardCover }>

                            <Cover

                            url={ this.props.data.img }
                            uri={ this.props.data.uri }

                            small

                            />

                        </div>

                    </div>

                    <div className="col">

                        <div className={ styles.cardTitle }>{ this.props.data.title }</div>
                        <div className={ styles.cardOwner }>de { this.props.data.owner }</div>

                    </div>

                </div>

            </div>

        )

    }

}

export default MediaCard
