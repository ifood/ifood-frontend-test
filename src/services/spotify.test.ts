import axios from 'axios';

import Spotify from './spotify';

describe('SpotifyService', () => {
  it('should create basic authentication header', () => {
    const createdToken = Spotify.createBasicAuthenticationHeader();

    const regex = /^Basic .*$/;
    expect(regex.test(createdToken)).toBeTruthy();
  });

  it('should create access token options', () => {
    const { headers } = Spotify.createAccessTokenOptions();

    expect(headers.Authorization).toBeDefined();
    expect(headers['Content-Type']).toEqual('application/x-www-form-urlencoded');
  });

  it('should get access token', async () => {
    const response = {
      access_token: 'access-mock-token',
      token_type: 'Bearer',
      refresh_token: 'refresh-mock-token',
    };

    const postMock = jest.fn().mockReturnValue({ data: response });
    axios.post = postMock;

    const {
      accessToken,
      tokenType,
      refreshToken,
    } = await Spotify.getAccessToken('code-string-test');

    expect(postMock).toBeCalled();
    expect(accessToken).toEqual(response.access_token);
    expect(tokenType).toEqual(response.token_type);
    expect(refreshToken).toEqual(response.refresh_token);
  });

  it('should refresh access token', async () => {
    const response = {
      access_token: 'access-mock-token',
      token_type: 'Bearer',
    };

    const postMock = jest.fn().mockReturnValue({ data: response });
    axios.post = postMock;

    const {
      accessToken,
      tokenType,
      refreshToken,
    } = await Spotify.refreshAccessToken('refresh-mock-token');

    expect(postMock).toBeCalled();
    expect(accessToken).toEqual(response.access_token);
    expect(tokenType).toEqual(response.token_type);
    expect(refreshToken).toEqual('refresh-mock-token');
  });

  it('should get featured playlists', async () => {
    const response = {
      playlists: {
        items: [{ id: 'playlist-mock-id' }],
      },
    };

    const getMock = jest.fn().mockReturnValue({ data: response });
    axios.get = getMock;

    const { items } = await Spotify.getFeaturedPlaylists({});

    expect(getMock).toBeCalled();
    expect(items.length).toEqual(1);
  });

  it('should get featured playlists with query params', async () => {
    const response = {
      playlists: {
        items: [{ id: 'playlist-mock-id' }],
      },
    };

    const filters = {
      locale: 'pt_BR',
      country: 'Brasil',
      timestamp: '2020-09-20T00:00:00',
      limit: 10,
      offset: 1,
    };

    const getMock = jest.fn().mockReturnValue({ data: response });
    axios.get = getMock;

    const { items } = await Spotify.getFeaturedPlaylists(filters);

    expect(getMock).toBeCalledWith(
      'https://api.spotify.com/v1/browse/featured-playlists?locale=pt_BR&country=Brasil&timestamp=2020-09-20T00%3A00%3A00&limit=10&offset=1',
      { headers: { Authorization: 'Bearer access-mock-token' } },
    );
    expect(items.length).toEqual(1);
  });
});
