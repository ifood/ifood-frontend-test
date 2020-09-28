import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createFilter } from 'redux-persist-transform-filter'

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'spotifood',
      storage,
      whitelist: ['session'],
      transforms: [
        createFilter('session', ['token', 'refreshToken', 'signed', 'user']),
      ],
    },
    reducers
  )

  return persistedReducer
}
