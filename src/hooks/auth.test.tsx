import React from 'react';

import mockAxios from 'axios';

import { shallow } from 'enzyme';

import * as notistack from 'notistack';

import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';
import Spotify from '../services/spotify';

jest.mock('axios');
jest.mock('../services/spotify');

describe('Auth Hook', () => {
  const { location } = window;
  const { SnackbarProvider } = notistack;

  let wrapper: any;

  beforeAll((): void => {
    // @ts-ignore
    delete window.location;

    // @ts-ignore
    window.location = {};
  });

  beforeEach(() => {
    wrapper = ({ children }: any) => (
      <SnackbarProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </SnackbarProvider>
    );
  });

  afterEach(() => {
    localStorage.removeItem('@Spotifood:AccessToken');
    localStorage.removeItem('@Spotifood:RefreshToken');
    localStorage.removeItem('@Spotifood:TokenType');
  });

  afterAll((): void => {
    window.location = location;
  });

  it('should render AuthProvider', () => {
    const component = shallow(
      <SnackbarProvider>
        <AuthProvider />
      </SnackbarProvider>,
    );

    expect(component.text()).toEqual('<AuthProvider />');
  });

  it('should fail to instance useAuth', () => {
    expect(() => useAuth()).toThrow();
  });

  it('should show Spotify error', async () => {
    window.location.search = '?error=access_denied';

    jest.mock('notistack', () => ({
      useSnackbar: jest.fn(),
      SnackbarProvider: ({ children }: any) => (
        <div>{children}</div>
      ),
    }));

    wrapper = ({ children }: any) => (
      <SnackbarProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </SnackbarProvider>
    );

    const enqueueSnackbar = jest.fn();
    jest.spyOn(notistack, 'useSnackbar').mockImplementation(() => ({
      enqueueSnackbar,
      closeSnackbar: jest.fn(),
    }));

    renderHook(useAuth, { wrapper });

    expect(enqueueSnackbar).toBeCalledWith(
      'Ops! Não conseguimos fazer o login com sua conta do Spotify.',
      { variant: 'error' },
    );
  });

  it('should logoff', async () => {
    localStorage.setItem('@Spotifood:RefreshToken', 'mock-refresh-token');

    mockAxios.post = jest.fn().mockRejectedValue({ });

    const { waitForNextUpdate } = renderHook(useAuth, { wrapper });

    expect(localStorage.getItem('@Spotifood:RefreshToken')).toBeDefined();

    await act(() => waitForNextUpdate());

    expect(localStorage.getItem('@Spotifood:RefreshToken')).toBeNull();
  });

  it('should get access token', async () => {
    window.location.search = '?code=123';

    mockAxios.post = jest.fn().mockResolvedValueOnce({
      data: {
        access_token: 'mock-access-token',
        token_type: 'mock-refresh-token',
        refresh_token: 'Bearer',
      },
    });

    Spotify.getAccessToken = jest.fn().mockResolvedValue({
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      tokenType: 'Bearer',
    });

    const { waitForNextUpdate } = renderHook(useAuth, { wrapper });

    await act(() => waitForNextUpdate());

    expect(localStorage.getItem('@Spotifood:AccessToken')).toEqual('mock-access-token');
    expect(localStorage.getItem('@Spotifood:RefreshToken')).toEqual('mock-refresh-token');
    expect(localStorage.getItem('@Spotifood:TokenType')).toEqual('Bearer');
  });

  it('should refresh token', async () => {
    localStorage.setItem('@Spotifood:RefreshToken', 'mock-refresh-token');

    mockAxios.post = jest.fn().mockResolvedValueOnce({
      data: {
        access_token: 'mock-access-token',
        refresh_token: 'Bearer',
      },
    });

    Spotify.refreshAccessToken = jest.fn().mockResolvedValue({
      accessToken: 'mock-access-token',
      tokenType: 'Bearer',
    });

    const { waitForNextUpdate } = renderHook(useAuth, { wrapper });

    await act(() => waitForNextUpdate());

    expect(localStorage.getItem('@Spotifood:AccessToken')).toEqual('mock-access-token');
    expect(localStorage.getItem('@Spotifood:RefreshToken')).toEqual('mock-refresh-token');
    expect(localStorage.getItem('@Spotifood:TokenType')).toEqual('Bearer');
  });
});
