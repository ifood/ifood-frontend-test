import React from 'react'
import _lang from 'lodash/lang'

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

    async componentDidUpdate(prevProps, prevState){

        if(!_lang.isEqual(prevProps.data, this.props.data)){

            this.setState({ index: 0 })

        }

    }

    /* */

    getSlideStepWidth(){

        if(this.props.viewport < 768){

            return 160

        } else if(this.props.viewport > 768 && this.props.viewport <= 992){

            return 210

        } else {

            return 250

        }

    }

    getItemsOffset(){

        return Math.ceil(this.props.viewport / this.getSlideStepWidth()) + 2

    }

    getItems(){

        if(this.props.data.loading){

            return [...new Array(this.getItemsOffset()).keys()]

        } else {

            return this.props.data.items

        }

    }

    /* */

    handleNavigation(direction){

        let duration = 600

        /* */

        if(direction === 'prev'){

            if(this.state.index) this.setState({ index: this.state.index - 1 })

        } else {

            if(this.state.index < this.props.data.items.length - 1) this.setState({ index: this.state.index + 1 })

        }

        /* */

        window.requestAnimationFrame(() => {

            this.setState({

                translate: direction === 'prev' ? -this.getSlideStepWidth() : this.getSlideStepWidth(),
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

        const getItems = this.getItems()
        const getItemsOffset = this.getItemsOffset()
        const getSlideStepWidth = this.getSlideStepWidth()

        /* */

        return (

            <div className={ styles.PlaylistList }>

                <div className="row no-gutters">

                    <div className="col">

                        <h1 className={

                            [

                                styles.PlaylistTitle,
                                this.props.data.loading && styles.PlaylistTitleLoading

                            ].filter(Boolean).join(' ')

                        }>{

                            !this.props.data.loading ? this.props.data.message : <>&nbsp;</>

                    }</h1>

                    </div>

                    {

                        !this.props.data.loading && (

                            <div className="col-auto pr-4 pr-md-5">

                                <button

                                className={ styles.PlaylistListNavigation }

                                disabled={ !this.state.index }
                                onClick={ () => this.handleNavigation('prev') }

                                title="Anterior"

                                aria-label="Anterior"

                                >

                                    <Icon glyph="arrow_left" />

                                </button>

                                <button

                                className={ styles.PlaylistListNavigation }

                                disabled={ this.state.index === this.props.data.items.length - 1 }
                                onClick={ () => this.handleNavigation('next') }

                                title="Próximo"

                                aria-label="Próximo"

                                >

                                    <Icon glyph="arrow_right" />

                                </button>

                            </div>

                        )

                    }

                </div>

                {

                getItems.length ?

                <div className={ styles.PlaylistSlider }>

                    <ul className={ styles.PlaylistListRow } style={{

                        transform : `translate3d(${this.state.translate - getSlideStepWidth}px, 0, 0)`,
                        transitionDuration : this.state.duration

                    }}

                    >

                        {

                            getItems.slice(this.state.index, this.state.index + getItemsOffset).map((val, index) => {

                                return (

                                    <li className={ styles.PlaylistListList } key={ val.id || index }>

                                        <div className={

                                            [

                                                styles.PlaylistListCover,
                                                this.props.data.loading && styles.PlaylistListCoverLoading

                                            ].filter(Boolean).join(' ')

                                        } style={{

                                            animationDelay : `${(0.4 * index)}s`

                                        }} role="img" aria-label={ `Imagem de capa ${(val.type === 'album' ? 'do álbum' : 'da playlist')} "${val.title}" de ${val.owner}` }>

                                            {

                                                (val.img && val.uri) ? (

                                                    <Cover data={ val } />

                                                ) : null

                                            }

                                        </div>

                                        <div className={

                                            [

                                                styles.PlaylistListTitle,
                                                this.props.data.loading && styles.PlaylistListTitleLoading

                                            ].filter(Boolean).join(' ')

                                        }

                                        style={{

                                           animationDelay : `${(0.4 * index)}s`

                                       }}

                                        >{ !this.props.data.loading ? val.title : <>&nbsp;</> }</div>

                                        {

                                            (val.owner || this.props.data.loading) && (

                                                <div className={

                                                    [

                                                        styles.PlaylistListOwner,
                                                        this.props.data.loading && styles.PlaylistListOwnerLoading

                                                    ].join(' ')

                                                }

                                                style={{

                                                   animationDelay : `${(0.4 * index)}s`

                                               }}

                                                >{ !this.props.data.loading ? `de ${val.owner}` : <>&nbsp;</> }</div>

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
