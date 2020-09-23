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
import user, { userSaga } from './modules/user'
import filter, { filterSaga } from './modules/filter'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false }),
  sagaMiddleware,
]

const reducers = combineReducers({
  playlist,
  user,
  filter,
})

const store = configureStore({
  reducer: persistReducers(reducers),
  middleware,
})

const persistor = persistStore(store)

const rootSaga = function* () {
  yield all([playlistSaga(), userSaga(), filterSaga()])
}

sagaMiddleware.run(rootSaga)

export { store, persistor }
