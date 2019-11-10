import React from 'react'

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

            index: 0,
            translate: 0,
            duration: '0s'

        }

    }

    /* */

    getItemsOffset(){

        return Math.ceil(this.props.viewport / 250) + 2

    }

    /* */

    handleNavigation(direction){

        let duration = 600

        /* */

        if(direction == 'prev'){

            if(this.state.index) this.setState({ index: this.state.index - 1 })

        } else {

            if(this.state.index < this.props.data.items.length - 1) this.setState({ index: this.state.index + 1 })

        }

        /* */

        window.requestAnimationFrame(() => {

            this.setState({

                translate: direction == 'prev' ? -250 : 250,
                duration : '0s'

            })

            setTimeout(() => {

                this.setState({

                    translate: 0,
                    duration : `${(duration / 1000)}s`

                })

                setTimeout(() => {

                    this.setState({ duration : '0s' })

                }, duration)

            }, 1)

        })

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

                            () => this.handleNavigation('prev')

                        }

                        title="Anterior"

                        >

                            <Icon glyph="arrow_left" />

                        </button>

                        <button

                        className={ styles.PlaylistListNavigation }

                        disabled={ this.state.index === this.props.data.items.length - 1 }
                        onClick={

                            () => this.handleNavigation('next')

                        }

                        title="Próximo"

                        >

                            <Icon glyph="arrow_right" />

                        </button>

                    </div>

                </div>

                {

                this.props.data.items.length ?

                <div className={ styles.PlaylistSlider }>

                    <ul className={ styles.PlaylistListRow } style={{

                        transform : `translate3d(${this.state.translate - 250}px, 0, 0)`,
                        transitionDuration : this.state.duration

                    }}>

                        {

                            this.props.data.items.slice(this.state.index, this.state.index + getItemsOffset).map((val, index) => {

                                return (

                                    <li className={ styles.PlaylistListList } key={ val.id || 0 }>

                                        <div className={ styles.PlaylistListCover }>

                                            {

                                            (val.img && val.uri) && (

                                                <Cover

                                                url={ val.img }
                                                uri={ val.uri }

                                                />

                                            )

                                            }

                                        </div>

                                        {

                                        (val.title && val.owner) && (

                                            <>

                                                <div className={ styles.PlaylistListTitle }>{ val.title }</div>
                                                <div className={ styles.PlaylistListOwner }>de { val.owner }</div>

                                            </>

                                        )

                                        }

                                    </li>

                                )

                            })

                        }

                    </ul>

                </div>

                : null

                }

            </div>

        )

    }

}

export default PlaylistList
