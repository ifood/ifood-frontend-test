import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import playlist, { playlistSaga } from './modules/playlist'
import user, { userSaga } from './modules/user'

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: {
    playlist,
    user,
  },
  middleware,
})

const rootSaga = function* () {
  yield all([playlistSaga()])
  yield all([userSaga()])
}

sagaMiddleware.run(rootSaga)

export default store
