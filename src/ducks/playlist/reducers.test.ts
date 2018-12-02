import { generateCancellationToken } from '../../api/axios';
import { IPaging } from '../../api/spotify';
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import * as selectors from './selectors';

const validPage: IPaging = {
  href: 'https://api.spotify.com',
  items: [
    {
      href: '/playlists/37i9dQZF1DX7rOY2tZUw1k',
      id: '37i9dQZF1DX7rOY2tZUw1k',
      images: [
        {
          height: 300,
          url: 'https://i.scdn.co/image/',
          width: 300,
        },
      ],
      name: 'Timeless Love Songs',
    },
    {
      href: '/playlists/37i9dQZF1DX5bjCEbRU4SJ',
      id: '37i9dQZF1DX5bjCEbRU4SJ',
      images: [
        {
          height: 300,
          url: 'https://i.scdn.co/image/',
          width: 300,
        },
      ],
      name: 'Calm Down',
    },
  ],
  limit: 30,
  next: 'https://next',
  offset: 10,
  previous: 'https://prev',
  total: 13,
};

describe('initial state', () => {
  it('should accept undefined state and initialize a new state', () => {
    expect.assertions(1);
    const cancelToken = generateCancellationToken();
    const state = reducer(undefined, actions.listPlaylistsBegin(cancelToken));
    expect(state).not.toBeUndefined();
  });
  it('should return same state when receive unknown action', () => {
    expect.assertions(1);
    const cancelToken = generateCancellationToken();
    const state = reducer(
      initialState,
      actions.listPlaylistsBegin(cancelToken),
    );

    const nextState = reducer(state, { type: 'UNKNOWN_ACTION' } as any);
    expect(state).toEqual(nextState);
  });
});

describe('begin listing playlists', () => {
  it('should set cancellation token', () => {
    expect.assertions(1);
    const cancelToken = generateCancellationToken();
    const state = reducer(
      initialState,
      actions.listPlaylistsBegin(cancelToken),
    );
    expect(selectors.getCancellationToken({ playlist: state })).toEqual(
      cancelToken,
    );
  });
});

describe('Get list of playlists', () => {
  it('should set state from valid page', () => {
    expect.assertions(5);
    const cancelToken = generateCancellationToken();
    let state = reducer(initialState, actions.listPlaylistsBegin(cancelToken));

    state = reducer(undefined, actions.listPlaylistsSuccess(validPage));
    expect(selectors.getPlaylists({ playlist: state })).toEqual(
      validPage.items,
    );
    expect(selectors.getLimit({ playlist: state })).toBe(30);
    expect(selectors.getOffset({ playlist: state })).toBe(10);
    expect(selectors.getNextPage({ playlist: state })).toBe('https://next');
    expect(selectors.getPreviousPage({ playlist: state })).toBe('https://prev');
    expect(selectors.getCancellationToken({ playlist: state })).toBeNull();
  });
});

describe('Fail to get list of playlists', () => {
  it('should unset cancel token set state from valid page', () => {
    expect.assertions(5);
    const cancelToken = generateCancellationToken();
    let state = reducer(initialState, actions.listPlaylistsBegin(cancelToken));

    state = reducer(undefined, actions.listPlaylistsFailure('failure'));
    expect(selectors.getCancellationToken({ playlist: state })).toBeNull();
  });
});
