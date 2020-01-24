import React from 'react'

/* */

import Icon from 'components/Icon/Icon'

/* */

import styles from './Modal.module.scss'

/* */

const Modal = props => {

    return (

        <div className={ styles.Modal } role="dialog">

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className={

                        [

                            props.colXl && `col-xl-${props.colXl}`,
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

                                        {

                                        props.close && (

                                            <div className="col-auto">

                                                <button className={ styles.ModalHeaderClose } onClick={ () => props.onClose() } aria-label="Fechar" title="Fechar">

                                                    <Icon glyph="close" />

                                                </button>

                                            </div>

                                        )

                                        }

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
