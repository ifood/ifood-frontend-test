import { initialStateRootReducer, mockStore } from '../../__mocks__/reduxMock'
import {
  types,
  getFilterRequest,
  getFilterSuccess,
  getFilterError,
} from '../filter'

describe('action filter', () => {
  it('should dispatch getFilterRequest', () => {
    const payload = { type: types.GET_FILTER_REQUEST }
    const store = mockStore(initialStateRootReducer)

    store.dispatch(getFilterRequest())

    const actions = store.getActions()
    expect(actions).toEqual([payload])
  })

  it('should dispatch getFilterSuccess', () => {
    const filters = []
    const content = { filters }
    const payload = { type: types.GET_FILTER_SUCCESS, filters }

    const store = mockStore(initialStateRootReducer)

    store.dispatch(getFilterSuccess(content))

    const actions = store.getActions()
    expect(actions).toEqual([payload])
  })

  it('should dispatch getFilterError', () => {
    const error = 'error'
    const payload = { type: types.GET_FILTER_ERROR, error }

    const store = mockStore(initialStateRootReducer)

    store.dispatch(getFilterError(error))

    const actions = store.getActions()
    expect(actions).toEqual([payload])
  })
})
