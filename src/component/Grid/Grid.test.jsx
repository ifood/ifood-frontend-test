import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Grid from './Grid';

const items = [
  { id: 1, description: 'Item 1' },
  { id: 2, description: 'Item 2' },
];

describe('<Grid />', () => {
  it('snapshot', () => {
    const grid = mount(
      <Grid title="Grid title" items={items} itemRenderer={() => {}} />
    );
    jestExpect(toJson(grid)).toMatchSnapshot();
  });

  it('should return null if items are not provided', () => {
    const grid = shallow(<Grid />);
    expect(grid.type()).to.be.null;
  });

  it('should not render a h1 if title are not provided', () => {
    const grid = shallow(<Grid items={items} itemRenderer={() => {}} />);
    expect(grid.find('h1')).to.have.lengthOf(0);
  });

  it('should call itemRenderer for each item', () => {
    const itemRenderer = jest.fn();
    shallow(<Grid items={items} itemRenderer={itemRenderer} />);
    expect(itemRenderer.mock.calls).to.have.lengthOf(items.length);
  });
});
