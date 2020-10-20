/*eslint-disable*/
import React from 'react';
import { render, waitFor } from '../../../test-utils';
import PlaylistCard from '../components/PlaylistCard';
import '@testing-library/jest-dom';

const dataMock = {
  id: 1,
  name: 'Playlist Teste',
  images: [{ url: 'teste' }],
  description: 'Playlist para realizar testes',
};

test('Deve renderizar corretamente o componente', () => {
  render(<PlaylistCard data={dataMock} />);
});

test('Deve renderizar imagem fornecida para o card da playlist', () => {
  const { getByLabelText } = render(<PlaylistCard data={dataMock} />);

  expect(
    getByLabelText('spotifood-playlists-list-card-Playlist Teste-img')
  ).toBeInTheDocument();
  expect(
    getByLabelText('spotifood-playlists-list-card-Playlist Teste-img')
  ).toBeVisible();
});

test('Deve renderizar o titulo e a descricao da playlist', () => {
  const { getByLabelText } = render(<PlaylistCard data={dataMock} />);

  expect(
    getByLabelText('spotifood-playlists-list-card-Playlist Teste-text-area')
  ).toBeInTheDocument();
  expect(
    getByLabelText('spotifood-playlists-list-card-Playlist Teste-description')
  ).toBeVisible();
  expect(
    getByLabelText('spotifood-playlists-list-card-Playlist Teste-description')
  ).toBeVisible();
});
