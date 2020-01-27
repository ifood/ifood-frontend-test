import React from 'react'
import {

    CSSTransition

} from 'react-transition-group'

/* */

import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'

/* */

import styles from './Confirm.module.scss'

/* */

class Confirm extends React.Component {

    constructor(){

        super()

        this.state = {

            active : false,
            message: '',
            buttonOkText : 'OK',

            resolve : null,
            reject : null

        }

    }

    open(message, buttonOkText){

        return new Promise((resolve, reject) => {

            this.setState({

                active : true,
                buttonOkText : buttonOkText ? buttonOkText : this.state.buttonOkText,
                message,
                resolve,
                reject

            })

        })

    }

    close(){

        this.setState({

            active : false

        })

    }

    ok(){

        this.state.resolve()

        this.setState({

            active : false

        })

        setTimeout(() => {

            this.setState({
                
                resolve: null,
                reject : null,
                buttonOkText : 'OK'

            })

        }, 300)

    }

    render(){

        return (

            <CSSTransition

            in={ this.state.active }
            timeout={ 200 }
            classNames="transition-fade"
            unmountOnExit

            >

                <Modal

                colXl="4"
                colLg="6"
                colMd="6"
                col="11"

                onClose={ () => this.close() }

                >

                    <div className={ styles.Confirm }>

                        <div className={ styles.ConfirmTitle }>Atenção</div>
                        <div className={ styles.ConfirmDescription } dangerouslySetInnerHTML={{ __html : this.state.message }}></div>

                        <Button label={ this.state.buttonOkText } color="green" onClick={ () => this.ok() }/>

                    </div>

                </Modal>

            </CSSTransition>

        )

    }

}

export default Confirm
