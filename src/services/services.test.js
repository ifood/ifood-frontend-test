/* eslint-disable prefer-promise-reject-errors */
import Axios from 'axios';
import { toast } from 'react-toastify';
import { getFeaturedPlaylists } from './services';
import * as accessToken from '../utils/accessToken';

jest.mock('axios', () => ({ get: jest.fn() }));
jest.mock('react-toastify');

describe('getFeaturedPlaylists', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should remove access token when error status is 401', async () => {
    Axios.get.mockImplementation(() => Promise.reject({
      response: {
        status: 401,
        data: { error: { message: 'Unauthorized' } },
      },
    }));
    accessToken.removeAccessToken = jest.fn();

    await getFeaturedPlaylists();

    expect(accessToken.removeAccessToken).toHaveBeenCalled();
  });

  it('should call toastify when request fail', async () => {
    const expectedStatus = 400;
    const expectedMessage = 'Not Found';

    Axios.get.mockImplementation(() => Promise.reject({
      response: {
        status: expectedStatus,
        data: { error: { message: expectedMessage } },
      },
    }));

    await getFeaturedPlaylists();

    expect(toast.error).toHaveBeenCalledWith(`[${expectedStatus}] - ${expectedMessage}`);
  });
});
