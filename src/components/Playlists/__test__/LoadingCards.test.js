/*eslint-disable*/
import React from 'react';
import { render } from '@testing-library/react';
import LoadingCard from '../components/LoadingCard';
import '@testing-library/jest-dom';

test('Deve renderizar corretamente o componente', () => {
  render(<LoadingCard />);
});

test('Deve renderizar visivel ao usuário', () => {
  const { getByLabelText } = render(<LoadingCard onChange={() => {}} />);

  expect(
    getByLabelText('spotifood-playlists-loading-card')
  ).toBeInTheDocument();
  expect(getByLabelText('spotifood-playlists-loading-card')).toBeVisible();
});
