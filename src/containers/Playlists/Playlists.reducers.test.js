import { playlistsData, filtersMetadata } from './Playlists.reducers';
import { PLAYLISTS, FILTERS_METADATA } from './Playlists.actions';

describe('Playlists.reducers', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.action = {};
  });

  describe('playlistsData()', () => {
    it('should return the correct new state for PLAYLISTS.REQUEST action', () => {
      mocks.action = {
        type: PLAYLISTS.REQUEST,
      };
      const newState = playlistsData({ something: 'already there' }, mocks.action);
      expect(newState).toMatchSnapshot();
    });

    it('should return the correct new state for PLAYLISTS.SUCCESS action', () => {
      mocks.action = {
        type: PLAYLISTS.SUCCESS,
        data: ['1', '2'],
      };
      const newState = playlistsData({ something: 'already there' }, mocks.action);
      expect(newState).toMatchSnapshot();
    });

    it('should return the correct new state for PLAYLISTS.FAILURE action', () => {
      mocks.action = {
        type: PLAYLISTS.FAILURE,
        error: 'Some error',
      };
      const newState = playlistsData({ something: 'already there' }, mocks.action);
      expect(newState).toMatchSnapshot();
    });
  });

  describe('filtersMetadata()', () => {
    it('should return the correct new state for FILTERS_METADATA.REQUEST action', () => {
      mocks.action = {
        type: FILTERS_METADATA.REQUEST,
      };
      const newState = filtersMetadata({ something: 'already there' }, mocks.action);
      expect(newState).toMatchSnapshot();
    });

    it('should return the correct new state for FILTERS_METADATA.SUCCESS action', () => {
      mocks.action = {
        type: FILTERS_METADATA.SUCCESS,
        metadata: ['1', '2'],
      };
      const newState = filtersMetadata({ something: 'already there' }, mocks.action);
      expect(newState).toMatchSnapshot();
    });

    it('should return the correct new state for FILTERS_METADATA.FAILURE action', () => {
      mocks.action = {
        type: FILTERS_METADATA.FAILURE,
        error: 'Some error',
      };
      const newState = filtersMetadata({ something: 'already there' }, mocks.action);
      expect(newState).toMatchSnapshot();
    });
  });
});
