import React from 'react';
import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { App } from '../App';
import { AppProvider } from '../contexts/AppContext';
import { useAuth } from '../hooks/useAuth';

jest.mock('../hooks/useAuth');
const useAuthMocked = mocked(useAuth, true);

describe('App', () => {
  beforeEach(() => {
    useAuthMocked.mockClear();
  });

  test('renders the app (unauthorized)', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: null,
      login: jest.fn(),
      logout: jest.fn(),
    }));

    render(<App />, { wrapper: AppProvider });

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    const title = screen.getByText(/spotifood/i);
    expect(title).toBeInTheDocument();

    expect(useAuthMocked).toHaveBeenCalled();
  });

  test('renders the app (authorized)', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: { token: '123' },
      login: jest.fn(),
      logout: jest.fn(),
    }));

    render(<App />, { wrapper: AppProvider });

    const title = screen.getByText(/spotifood/i);
    expect(title).toBeInTheDocument();

    expect(useAuthMocked).toHaveBeenCalledTimes(2);
  });

  test('matches the snapshot (app unauthorized)', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: null,
      login: jest.fn(),
      logout: jest.fn(),
    }));

    const { baseElement } = render(<App />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();

    expect(useAuthMocked).toHaveBeenCalled();
  });

  test('matches the snapshot (app authorized)', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: { token: '123' },
      login: jest.fn(),
      logout: jest.fn(),
    }));

    const { baseElement } = render(<App />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();

    expect(useAuthMocked).toHaveBeenCalled();
  });
});
