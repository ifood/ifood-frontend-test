import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: {},
  middleware,
})

const rootSaga = function* () {}

sagaMiddleware.run(rootSaga)

export default store
