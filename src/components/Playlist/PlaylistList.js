import React from 'react'
import {

    CSSTransition,
    TransitionGroup

} from 'react-transition-group'

/* */

import Cover from 'components/Cover/Cover'
import Icon from 'components/Icon/Icon'

/* */

import styles from './Playlist.module.scss'

/* */

class PlaylistList extends React.Component {

    constructor(props){

        super(props)

        this.state = {

            index: 0

        }

    }

    /* */

    getItemsOffset(){

        return Math.ceil(this.props.viewport / 250) + 1

    }

    /* */

    handlePrev(){

        if(this.state.index) this.setState({ index: this.state.index - 1 })

    }

    handleNext(){

        if(this.state.index < this.props.data.items.length - 1) this.setState({ index: this.state.index + 1 })

    }

    /* */

    render(){

        const getItemsOffset = this.getItemsOffset()

        /* */

        return (

            <div className={ styles.PlaylistList }>

                <div className="row no-gutters">

                    <div className="col">

                        <h1 className={ styles.PlaylistTitle }>{ this.props.data.message }</h1>

                    </div>

                    <div className="col-auto pr-5">

                        <button

                        className={ styles.PlaylistListNavigation }

                        disabled={ !this.state.index }
                        onClick={

                            () => this.handlePrev()

                        }

                        >

                            <Icon glyph="arrow_left" />

                        </button>

                        <button

                        className={ styles.PlaylistListNavigation }

                        disabled={ this.state.index === this.props.data.items.length - 1 }
                        onClick={

                            () => this.handleNext()

                        }>

                            <Icon glyph="arrow_right" />

                        </button>

                    </div>

                </div>

                {

                this.props.data.items.length ?

                <TransitionGroup className={ styles.PlaylistListRow } component="ul">

                    {

                        this.props.data.items.slice(this.state.index, this.state.index + getItemsOffset).map((val, index) => {

                            return (

                                <CSSTransition

                                classNames="PlaylistListSlider"
                                timeout={ 400 }
                                key={ val.id }

                                >

                                    <li className={ styles.PlaylistListList }>

                                        <div className={ styles.PlaylistListCover }>

                                            <Cover

                                            url={ val.img }
                                            uri={ val.uri }

                                            />

                                        </div>

                                        <div className={ styles.PlaylistListTitle }>{ val.title }</div>
                                        <div className={ styles.PlaylistListOwner }>de { val.owner }</div>

                                    </li>

                                </CSSTransition>

                            )

                        })

                    }

                </TransitionGroup>

                : null

                }

            </div>

        )

    }

}

export default PlaylistList
