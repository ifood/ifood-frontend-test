import React from 'react'
import { Provider } from 'react-redux'
import Button from '@material-ui/core/Button'

import store from '../store'
import { Search } from '../components/search'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Search />
        <Button variant='contained' color='primary'>
          Olá Mundo
        </Button>
      </div>
    </Provider>
  )
}

export default App
