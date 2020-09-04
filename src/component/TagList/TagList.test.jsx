import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TagList from './TagList';

const items = [
  {
    id: 'id',
    field: 'field',
    value: 'value',
  },
];

describe('<TagList />', () => {
  it('snapshot', () => {
    const onDeleteTag = jest.fn();
    const tagList = mount(
      <TagList title="List" items={items} onDeleteTag={onDeleteTag} />
    );
    jestExpect(toJson(tagList)).toMatchSnapshot();
  });

  it('should return null if items are not provided', () => {
    const tagList = shallow(<TagList title="List" />);
    expect(tagList.type()).to.be.null;
  });

  it('should not render a span if title are not provided', () => {
    const tagList = shallow(<TagList />);
    expect(tagList.find('span')).to.have.lengthOf(0);
  });
});
