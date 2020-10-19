/*eslint-disable*/
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from '../components/SearchInput';
import '@testing-library/jest-dom';

test('Deve renderizar corretamente o componente', () => {
  render(<SearchInput />);
});

test('Deve renderizar visivel ao usuário', () => {
  const { getByLabelText } = render(<SearchInput onChange={() => {}} />);

  expect(
    getByLabelText('spotifood-playlists-header-search-input-container')
  ).toBeInTheDocument();
  expect(
    getByLabelText('spotifood-playlists-header-search-input')
  ).toBeVisible();
});

test('Deve chamar a função onChange ao digitar', () => {
  const mockFn = jest.fn();

  const { getByLabelText } = render(<SearchInput onChange={mockFn} />);

  expect(
    getByLabelText('spotifood-playlists-header-search-input')
  ).toBeInTheDocument();

  fireEvent.change(getByLabelText('spotifood-playlists-header-search-input'), {
    target: { value: 'playlist teste' },
  });

  expect(mockFn).toHaveBeenCalled();
  expect(getByLabelText('spotifood-playlists-header-search-input').value).toBe(
    'playlist teste'
  );
});
