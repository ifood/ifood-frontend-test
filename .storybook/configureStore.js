import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// const middlewares = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore([thunk])

const store = (initialState = {}) => mockStore(initialState)

export default store
