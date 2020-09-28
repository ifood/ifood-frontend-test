import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { persistStore } from 'redux-persist'

import persistReducers from './persistReducer'

import playlist, { playlistSaga } from './modules/playlist'
import session, { sessionSaga } from './modules/session'
import filter, { filterSaga } from './modules/filter'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false }),
  sagaMiddleware,
]

const reducers = combineReducers({
  playlist,
  session,
  filter,
})

const store = configureStore({
  reducer: persistReducers(reducers),
  middleware,
})

const persistor = persistStore(store)

const rootSaga = function* () {
  yield all([playlistSaga(), sessionSaga(), filterSaga()])
}

sagaMiddleware.run(rootSaga)

export { store, persistor }
