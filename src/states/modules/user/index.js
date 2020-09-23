import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
  signed: false,
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest: (state) => extend(state, { loading: true }), // TODO: get user info, if time
    getUserSuccess: (state) => extend(state, { loading: false }),
    getUserFailure: (state) => extend(state, { loading: false }),
    setToken: (state, { payload }) => {
      console.log(payload.token) // TODO: set token to localstorage
      return extend(state, { token: payload.token, signed: true })
    },
  },
})

export const {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  setToken,
} = actions

export { default as userSaga } from './sagas'

export default reducer
