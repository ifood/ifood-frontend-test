import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { SpotifyServiceAuth } from '../services/auth.service';
import Swal from 'sweetalert2';
import axios from 'axios';
import useLogin from './useLogin';

const authorization = mocked(SpotifyServiceAuth.authorization);
const mockedAxios = mocked(axios);

const spy = jest.spyOn(Swal, 'fire');

const MockUseCustomHook = () => {
  const { goToLogin, hasToken } = useLogin();
  return (
    <div>
      <label data-testid="has-token">{hasToken() ? 'token' : ''}</label>
      <button data-testid="login" onClick={goToLogin} />
    </div>
  )
};

jest.mock('../services/auth.service');
jest.mock('axios');

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

beforeEach(() => {
  authorization.mockClear();
  mockedAxios.mockClear();
  spy.mockClear();
});

const client_id = 'CLIENT_ID'; // Your client id
const redirect_uri = 'REDIRECT_URI'; // Your redirect uri
const authEndpoint = 'AUTH_ENDPOINT';
const scopes = 'SCOPES';

const { location } = window;

beforeAll((): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  delete window.location;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  window.location = {
      href: '',
      hash: '',
  };
});

afterAll((): void => {
  window.location = location;
});

describe('useLogin hook', () => {
  test('Go to login', async () => {
    const { getByTestId } = render(<MockUseCustomHook />);

    await act(async () => {
      await fireEvent.click(getByTestId('login'));
    });

    const target = `${authEndpoint}/authorize?response_type=token&client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;
    window.location.href = target;
    expect(window.location.href).toBe(target)
  });

  test('not has token', async () => {
    const { getByTestId } = render(<MockUseCustomHook />);
    expect(getByTestId('has-token').textContent).toBe('');
  });

  test('has token', async () => {
    const token = '#access_token=BQBm0hg4g1JvJvbq0rmOPuNzj-DOoSyBNf6HSVDQHjFA7MzyarUtz-aWHZlCNscdH8AfavvqE2pmLoO0nQ1_ydgGfXvDyluAxBXVVYT2o1UbO0HVH5iC8_ynMourpwzTpEAdTJtxY8sCdy_BX4OxHmUSb0AP_hpB&token_type=Bearer&expires_in=3600';
    window.location.hash = token;
    const { getByTestId } = render(<MockUseCustomHook />);
    expect(getByTestId('has-token').textContent).toBe('token');
  });
});
