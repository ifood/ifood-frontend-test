import thunk from 'redux-thunk';
import { getPlaylists } from '../playlist'
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { playlistsMock } from '../../mock/playlistsMock'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const initialState = {
  message: '',
  playlists: {
    items: []
  }
}

describe('getPlaylists Actions', () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('fetches all playlists successfully', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          playlistsMock
        ]
      });
    });

    const expectedActions = [
      {
        type: 'GET_PLAYLISTS_SUCCESS',
        payload: [playlistsMock]
    }
  ]

    return store.dispatch(getPlaylists({})).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('returns failure action when fail to fetch playlists', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });

    const expectedActions = [
      {
        type: 'GET_PLAYLISTS_FAILURE',
        payload: 'Request failed with status code 400'

      }
    ];

    return store.dispatch(getPlaylists({})).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});
