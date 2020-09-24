import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import { AppProvider } from '../contexts/AppContext';
import * as useAuth from '../hooks/useAuth';

describe('App', () => {
  test('renders the app (unauthorized)', () => {
    const spyUseAuth = jest.spyOn(useAuth, 'useAuth').mockImplementation(() => ({
      auth: null,
      login: () => undefined,
      logout: () => undefined,
    }));

    render(<App />, { wrapper: AppProvider });

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    const title = screen.getByText(/spotifood/i);
    expect(title).toBeInTheDocument();

    expect(spyUseAuth).toHaveBeenCalled();
  });

  test('renders the app (authorized)', () => {
    const spyUseAuth = jest.spyOn(useAuth, 'useAuth').mockImplementation(() => ({
      auth: { token: '123' },
      login: () => undefined,
      logout: () => undefined,
    }));

    render(<App />, { wrapper: AppProvider });

    const title = screen.getByText(/spotifood/i);
    expect(title).toBeInTheDocument();

    expect(spyUseAuth).toHaveBeenCalled();
  });

  test('matches the snapshot (app unauthorized)', () => {
    const spyUseAuth = jest.spyOn(useAuth, 'useAuth').mockImplementation(() => ({
      auth: null,
      login: () => undefined,
      logout: () => undefined,
    }));

    const { baseElement } = render(<App />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();

    expect(spyUseAuth).toHaveBeenCalled();
  });

  test('matches the snapshot (app authorized)', () => {
    const spyUseAuth = jest.spyOn(useAuth, 'useAuth').mockImplementation(() => ({
      auth: { token: '123' },
      login: () => undefined,
      logout: () => undefined,
    }));

    const { baseElement } = render(<App />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();

    expect(spyUseAuth).toHaveBeenCalled();
  });
});
