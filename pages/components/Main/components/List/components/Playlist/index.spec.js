import React from 'react';
import renderer from 'react-test-renderer';
import Component from './index';
import playlists from '../../../../../../../__mocks__/services/__data__/playlists.json';

test('Check component', () => {
  const component = renderer.create(
    <Component playlist={playlists.playlists.items[0]} />,
  );
  const tree = component.toJSON();
  expect(tree).toBeTruthy();
});
