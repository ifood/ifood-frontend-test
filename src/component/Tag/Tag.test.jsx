import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tag from './Tag';

describe('<Tag />', () => {
  it('snapshot', () => {
    const wrapper = mount(<Tag field="field" value="value" />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onDelete (with id as param) when delete button is clicled', () => {
    const onDelete = jest.fn();
    const id = 'tagId';
    const tag = mount(<Tag id={id} onDelete={onDelete} />);
    tag.find('button').simulate('click');
    expect(onDelete.mock.calls.length).to.be.equal(1);
    expect(onDelete.mock.calls[0][0]).to.be.equal(id);
  });

  it("should not throw an error if onDelete wasn't provided", () => {
    const tag = mount(<Tag />);
    function click() {
      tag.find('button').simulate('click');
    }
    expect(click).to.not.throw();
  });
});
