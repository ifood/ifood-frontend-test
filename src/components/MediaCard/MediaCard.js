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

                <div className="row no-gutters">

                    <div className="col-auto pr-3">

                        <div className={ styles.cardCover }>

                            <Cover

                            url='aaaaaa'
                            uri='bbbbbb'

                            small

                            />

                        </div>

                    </div>

                    <div className="col">

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos laudantium quisquam vero distinctio facilis molestiae deserunt vel iure, earum, fuga nihil dolor hic sapiente quos eaque impedit ab eveniet?

                    </div>

                </div>

            </div>

        )

    }

}

export default MediaCard
