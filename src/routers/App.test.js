import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Playlists from './../components/playlists/playlists';
import PageNotFound from './../components/pageNotFound/pageNotFound';
import AppRouter from './App';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

test('rediret to page not found', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(Playlists)).toHaveLength(0);
  expect(wrapper.find(PageNotFound)).toHaveLength(1);
});

test('rediret to main page playlists', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/playlists']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(Playlists)).toHaveLength(1);
  expect(wrapper.find(PageNotFound)).toHaveLength(0);
});

test('rediret to main page playlists', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(Playlists)).toHaveLength(1);
  expect(wrapper.find(PageNotFound)).toHaveLength(0);
});