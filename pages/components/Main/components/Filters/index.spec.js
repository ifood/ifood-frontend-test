import React from 'react';
import renderer from 'react-test-renderer';
import Component from './index';

test('Check component', () => {
  const component = renderer.create(
    <Component />,
  );
  const tree = component.toJSON();
  expect(tree).toBeTruthy();
});
