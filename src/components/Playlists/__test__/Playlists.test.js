/*eslint-disable*/
import React from 'react';
import { render, waitFor } from '../../../test-utils';
import Playlists from '../Playlists';
import '@testing-library/jest-dom';

test('Deve renderizar corretamente o componente', () => {
  render(<Playlists loading={false} data={[]} />);
});

test('Deve renderizar o header da playlist visível ao usuário', () => {
  const { getByLabelText } = render(<Playlists loading={false} data={[]} />);
  expect(getByLabelText('spotifood-playlists-header')).toBeInTheDocument();
  expect(getByLabelText('spotifood-playlists-header')).toBeVisible();
});

test('Deve renderizar o container playlist visível ao usuário', async () => {
  const { getByLabelText } = render(<Playlists loading={false} data={[]} />);
  await waitFor(() =>
    expect(getByLabelText('spotifood-playlists-list')).toBeInTheDocument(1)
  );
  expect(getByLabelText('spotifood-playlists-list')).toBeVisible();
});

test('Deve renderizar com o title fornecido', async () => {
  const { getByLabelText } = render(
    <Playlists loading={false} data={[]} title="Teste com Jest" />
  );

  await waitFor(() =>
    expect(getByLabelText('spotifood-playlists-header-title')).toBeVisible(1)
  );
  expect(getByLabelText('spotifood-playlists-header-title').textContent).toBe(
    'Teste com Jest'
  );
});
