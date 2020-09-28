import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
  refreshToken: null,
  signed: false,
}

const { actions, reducer } = createSlice({
  name: 'session',
  initialState,
  reducers: {
    refreshTokenRequest: (state) => extend(state, { loading: true }),
    refreshTokenSuccess: (state, { payload }) =>
      extend(state, {
        loading: false,
        token: payload.access_token,
        error: null,
      }),
    refreshTokenFailure: (state, { payload }) =>
      extend(state, { loading: false, error: payload.error }),
    setToken: (state, { payload }) =>
      extend(state, {
        token: payload.token,
        refreshToken: payload.refreshToken,
        signed: true,
      }),
  },
})

export const {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure,
  setToken,
} = actions

export { default as sessionSaga } from './sagas'

export default reducer
