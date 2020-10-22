import thunk from 'redux-thunk';
import { getFilters } from '../filter'
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { filters } from '../../mock/filtersMock'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const initialState = {
  filters: [],
  loading: false
}

describe('getFilters Actions', () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('fetches all filters correctly', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          ...filters
        ]
      });
    });

    const expectedActions = [
      {
        type: 'GET_FILTERS_SUCCESS',
        payload: filters
      }
    ];
    return store.dispatch(getFilters()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('returns failure  action when fail to fetch filters', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });

    const expectedActions = [
      {
        type: 'GET_FILTERS_FAILURE',
        payload: 'Request failed with status code 400'

      }
    ];

    return store.dispatch(getFilters()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});
