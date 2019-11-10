import React from 'react'

/* */

import Icon from 'components/Icon/Icon'

/* */

import styles from './Modal.module.scss'

/* */

const Modal = props => {

    return (

        <div className={ styles.Modal }>

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className={

                        [

                            props.colLg && `col-lg-${props.colLg}`,
                            props.colMd && `col-md-${props.colMd}`,
                            props.colSm && `col-sm-${props.colSm}`,
                            props.colXs && `col-xs-${props.colXs}`,
                            props.col && `col-${props.col}`

                        ].filter(Boolean).join(' ')

                    }>

                        <div className={ styles.ModalWrapper }>

                            { props.title && (

                                <div className={ styles.ModalHeader }>

                                    <div className="row align-items-center">

                                        <div className="col">

                                            <div className={ styles.ModalHeaderTitle }>{ props.title }</div>

                                        </div>

                                        <div className="col-auto">

                                            <div onClick={ () => props.onClose() }>

                                                <Icon className={ styles.ModalHeaderClose } glyph="close" />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )}

                            <div className={ styles.ModalContent }>{ props.children }</div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Modal
