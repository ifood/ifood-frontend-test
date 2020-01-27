import React from 'react'
import ReactDOM from 'react-dom'

/* */

import { Provider } from 'react-redux'
import { Store } from 'state/store'

/* */

import 'scss/style.scss'
import 'material-colors/dist/colors.var.css'

/* */

import App from './App'

/* */

ReactDOM.render(

    <Provider store={ Store }>

        <App />

    </Provider>,

    document.getElementById('root')

)
