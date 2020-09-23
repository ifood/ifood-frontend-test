import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createFilter } from 'redux-persist-transform-filter'

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'spotifood',
      storage,
      whitelist: ['user'],
      transforms: [createFilter('user', ['token', 'signed', 'user'])],
    },
    reducers
  )

  return persistedReducer
}
