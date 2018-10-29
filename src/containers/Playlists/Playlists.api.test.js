import axios from 'axios';
import PlaylistsApi from './Playlists.api';
import { PLAYLISTS_URL, FILTER_METADATA_URL } from './Playlists.constants';

describe('PlaylistsApi', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.props = {
      width: 'xs',
    };
  });

  describe('fetchPlaylists()', () => {
    it('should call localStorage.getItem with expected parameters', () => {
      const spy = jest.spyOn(Storage.prototype, 'getItem');
      PlaylistsApi.fetchPlaylists();
      expect(spy).toBeCalledWith('spotifood-access-token');
    });

    it('should call axios.get with expected parameters', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'access-token-mock!');
      const axiosSpy = jest.spyOn(axios, 'get').mockImplementation(() => {});
      const options = {
        headers: { Authorization: 'Bearer access-token-mock!' },
        params: {
          locale: 'en_AU',
        },
      };

      PlaylistsApi.fetchPlaylists({ locale: options.params.locale });
      expect(axiosSpy).toBeCalledWith(PLAYLISTS_URL, options);
    });

    it('should return the data as expected', async () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'access-token-mock!');
      const responseMock = {
        data: {
          playlists: {
            items: ['1', '2'],
          },
        },
      };
      jest.spyOn(axios, 'get').mockImplementation(() => responseMock);
      const response = await PlaylistsApi.fetchPlaylists();
      expect(response).toEqual(responseMock.data.playlists.items);
    });
  });

  describe('fetchFiltersMetadata()', () => {
    it('should call axios.get with expected parameters', () => {
      const axiosSpy = jest.spyOn(axios, 'get').mockImplementation(() => {});

      PlaylistsApi.fetchFiltersMetadata();
      expect(axiosSpy).toBeCalledWith(FILTER_METADATA_URL);
    });

    it('should return the data as expected', async () => {
      const responseMock = {
        data: {
          filters: ['1', '2'],
        },
      };
      jest.spyOn(axios, 'get').mockImplementation(() => responseMock);
      const response = await PlaylistsApi.fetchFiltersMetadata();
      expect(response).toEqual(responseMock.data.filters);
    });
  });
});
