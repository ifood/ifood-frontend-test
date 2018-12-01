// Link.react.test.js
import React from 'react';
import Component from './index';
import renderer from 'react-test-renderer';


test('Check component', () => {
  const component = renderer.create(
    <Component />,
  );
  const tree = component.toJSON();
  expect(tree).toBeTruthy();
});
