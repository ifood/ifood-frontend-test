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

test('renders playlist page', () => {
  wrapper();

  expect(screen.getByText(/Escute/i)).toBeInTheDocument();
  expect(screen.getByText(/sua playlist/i)).toBeInTheDocument();
  expect(screen.getByText(/favorita/i)).toBeInTheDocument();
});
