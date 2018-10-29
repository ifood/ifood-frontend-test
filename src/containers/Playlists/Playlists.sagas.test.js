import { put, call, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { runSaga } from 'redux-saga';

import playListsSaga, { fetchPlaylists, fetchFiltersMetadata } from './Playlists.sagas';
import Api from './Playlists.api';
import {
  PLAYLISTS,
  FILTERS_METADATA,
  playlists,
  filtersMetadata,
} from './Playlists.actions';

describe('playListsSaga', () => {
  describe('fetchPlaylists()', () => {
    it('should call the Api.fetchPlaylists with expected params', async () => {
      const dispatched = [];
      const apiSpy = jest.spyOn(Api, 'fetchPlaylists').mockImplementation(() => ['1', '2']);

      const actionMock = {
        type: PLAYLISTS.REQUEST,
        filters: ['1', '2'],
      };

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchPlaylists, actionMock).done;

      expect(apiSpy).toHaveBeenCalledWith(actionMock.filters);
    });

    it('should call the dispatch success action with expected params', async () => {
      const dispatched = [];
      jest.spyOn(Api, 'fetchPlaylists').mockImplementation(() => ['1', '2']);

      const actionMock = {
        type: PLAYLISTS.REQUEST,
        filters: ['1', '2'],
      };

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchPlaylists, actionMock).done;

      expect(dispatched).toEqual([playlists.success(['1', '2'])]);
    });

    it('should not call the dispatch success action with expected params', async () => {
      const dispatched = [];
      jest.spyOn(Api, 'fetchPlaylists').mockImplementation(() => { throw Error('mocked error'); });

      const actionMock = {
        type: PLAYLISTS.REQUEST,
        filters: ['1', '2'],
      };

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchPlaylists, actionMock).done;

      expect(dispatched).not.toEqual([playlists.success(['1', '2'])]);
    });

    it('should call the dispatch error action with expected params', async () => {
      const dispatched = [];
      jest.spyOn(Api, 'fetchPlaylists').mockImplementation(() => { throw Error('mocked error'); });

      const actionMock = {
        type: PLAYLISTS.REQUEST,
        filters: ['1', '2'],
      };

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchPlaylists, actionMock).done;

      expect(dispatched).toEqual([playlists.failure('mocked error')]);
    });
  });

  describe('fetchFiltersMetadata()', () => {
    it('should call the Api.fetchFiltersMetadata with expected params', async () => {
      const dispatched = [];
      const apiSpy = jest.spyOn(Api, 'fetchFiltersMetadata').mockImplementation(() => ['1', '2']);

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchFiltersMetadata).done;

      expect(apiSpy).toHaveBeenCalledWith();
    });

    it('should call the dispatch success action with expected params', async () => {
      const dispatched = [];
      jest.spyOn(Api, 'fetchFiltersMetadata').mockImplementation(() => ['1', '2']);

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchFiltersMetadata).done;

      expect(dispatched).toEqual([filtersMetadata.success(['1', '2'])]);
    });

    it('should not call the dispatch success action with expected params', async () => {
      const dispatched = [];
      jest.spyOn(Api, 'fetchFiltersMetadata').mockImplementation(() => { throw Error('mocked error'); });

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchFiltersMetadata).done;

      expect(dispatched).not.toEqual([filtersMetadata.success(['1', '2'])]);
    });

    it('should call the dispatch failure action with expected params', async () => {
      const dispatched = [];
      jest.spyOn(Api, 'fetchFiltersMetadata').mockImplementation(() => { throw Error('mocked error'); });

      await runSaga({
        dispatch: action => dispatched.push(action),
      }, fetchFiltersMetadata).done;

      expect(dispatched).toEqual([filtersMetadata.failure('mocked error')]);
    });
  });

  describe('fetchPlaylists()', () => {
    it('should call takeLatest with expected params', () => {
      const generator = cloneableGenerator(playListsSaga)();
      expect(generator.next().value).toEqual(takeLatest(PLAYLISTS.REQUEST, fetchPlaylists));
      expect(generator.next().value).toEqual(
        takeLatest(FILTERS_METADATA.REQUEST, fetchFiltersMetadata),
      );
    });
  });
});
