import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'

import { GET_FILTERS_API } from '../../App/urls'
import request from '../../../utils/request'

import * as actions from '../actions'
import playlistsPageSaga, { fetchFilters } from '../saga'

describe('playlistsPageSaga Saga', () => {
  describe('playlistsPageSaga', () => {
    const it = sagaHelper(playlistsPageSaga())

    it('should watch for actions', (result) => {
      expect(result).toBeTruthy()
    })
  })

  describe('fetchFilters', () => {
    describe('success scenario', () => {
      const it = sagaHelper(fetchFilters())
      const response = { filters: [1] }

      it('should call api', (result) => {
        expect(result).toEqual(call(request, GET_FILTERS_API, { method: 'GET' }, false))
        return response
      })

      it('should put successful action with selected state', (result) => {
        expect(result).toEqual(put(actions.fetchFiltersSuccessAction(response)))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })

    describe('failure scenario', () => {
      const it = sagaHelper(fetchFilters())
      const error = new Error()

      it('should call api', (result) => {
        expect(result).toEqual(call(request, GET_FILTERS_API, { method: 'GET' }, false))
        return error
      })

      it('should put failure action', (result) => {
        expect(result).toEqual(put(actions.fetchFiltersFailureAction(error)))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })
  })
})
