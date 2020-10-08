import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Home } from 'pages/home';
import { axe, toHaveNoViolations } from 'jest-axe';
import { authorizeSpotifyUrl } from 'common/utils';

jest.mock('common/utils');

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Home />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders Home link', () => {
  wrapper();
  const linkElement = screen.getByText(/ClientId/i);
  expect(linkElement).toBeInTheDocument();
});

test('submit client id', () => {
  wrapper();

  authorizeSpotifyUrl.mockReturnValue('x');

  fireEvent.change(screen.getByLabelText(/ClientId:/), {
    target: { value: '12313213213211' }
  });

  fireEvent.click(screen.getByText(/Prosseguir/));

  expect(window.location.href).toBeCalledWith('x');
});
