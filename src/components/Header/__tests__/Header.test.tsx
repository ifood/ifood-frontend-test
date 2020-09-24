import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { Header } from '../Header';
import { AppProvider } from '../../../contexts/AppContext';
import { useAuth } from '../../../hooks/useAuth';

jest.mock('../../../hooks/useAuth');
const useAuthMocked = mocked(useAuth, true);

describe('Header', () => {
  beforeEach(() => {
    useAuthMocked.mockClear();
  });

  test('renders the header', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: { token: '123' },
      login: jest.fn(),
      logout: jest.fn(),
    }));

    render(<Header />, { wrapper: AppProvider });

    expect(screen.getByRole('heading', { name: /spotifood/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });

  test('clicks on the logout button', () => {
    const logout = jest.fn();
    useAuthMocked.mockImplementation(() => ({
      auth: { token: '123' },
      login: jest.fn(),
      logout,
    }));

    render(<Header />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /logout/i }));
    expect(logout).toHaveBeenCalled();
  });

  test('matches the snapshot', () => {
    useAuthMocked.mockImplementation(() => ({
      auth: { token: '123' },
      login: jest.fn(),
      logout: jest.fn(),
    }));

    const { baseElement } = render(<Header />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();
  });
});
