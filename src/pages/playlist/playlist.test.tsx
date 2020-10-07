import React from 'react';
import { render, screen } from '@testing-library/react';
import { Playlist } from 'pages/playlist';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Playlist />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders error link', () => {
  wrapper();
  const linkElement = screen.getByText(/Escute sua playlist favorita enquanto aguarda seu pedido./i);
  expect(linkElement).toBeInTheDocument();
});
