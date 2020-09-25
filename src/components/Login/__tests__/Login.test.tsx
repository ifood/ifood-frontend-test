import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { Login } from '../Login';
import { AppProvider } from '../../../contexts/AppContext';
import { useAuth } from '../../../hooks/useAuth';

jest.mock('../../../hooks/useAuth');
const useAuthMocked = mocked(useAuth, true);

describe('Login', () => {
  beforeEach(() => {
    useAuthMocked.mockClear();
  });

  test('matches the snapshot', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: null,
      login: jest.fn(),
      logout: jest.fn(),
    }));

    const { baseElement } = render(<Login />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();
  });

  test('renders the login', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: null,
      login: jest.fn(),
      logout: jest.fn(),
    }));

    render(<Login />, { wrapper: AppProvider });

    expect(screen.getByRole('heading', { name: /spotifood/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('clicks on the login button', () => {
    const login = jest.fn();
    useAuthMocked.mockImplementation(() => ({
      auth: null,
      login,
      logout: jest.fn(),
    }));

    render(<Login />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(login).toHaveBeenCalled();
  });
});
