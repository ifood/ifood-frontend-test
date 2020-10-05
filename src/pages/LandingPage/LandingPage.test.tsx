import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import * as useLoginNamed from '../../hooks/useLogin';

import LandingPage from './LandingPage';

const goToLogin: jest.Mock<any, any> = (useLoginNamed as any).goToLogin;

jest.mock('../../hooks/useLogin', () => {
  const goToLogin = jest.fn();
  const hasToken = jest.fn();

  const useLogin = () => {
    return { goToLogin, hasToken }
  }
  return {
    __esModule: true,
    default: useLogin,
    goToLogin,
  };
});

beforeEach(() => {
  goToLogin.mockClear();
});

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: {} as any,
}

describe('Landing page', () => {
  test('Simple render', () => {
    const { container } = render(<LandingPage {...routeComponentPropsMock} />);
    expect(container.querySelector('.landing-page')).toBeInTheDocument();

    expect(container.querySelector('.landing-page__title')?.textContent).toBe('Escutar muda tudo');
    expect(container.querySelector('.landing-page__subtitle')?.textContent).toBe('Acesse com sua conta no spotify e confira as playlists.');
  });

  test('go to login', async () => {
    const { container } = render(<LandingPage {...routeComponentPropsMock} />);
    expect(container.querySelector('.landing-page')).toBeInTheDocument();

    const button = container.querySelector('.button-component');

    expect(goToLogin).not.toHaveBeenCalled();

    await act(async () => {
      if (button) {
        await fireEvent.click(button);
      }
    });

    expect(goToLogin).toHaveBeenCalled();
  });
});
