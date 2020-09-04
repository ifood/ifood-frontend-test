import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import { Button } from 'semantic-ui-react';
import Filter from './Filter';
import FilterModal from '../FilterModal';
import TagList from '../TagList';

const metadata = [
  {
    id: 'number',
    name: 'Number',
    validation: {
      primitiveType: 'INTEGER',
    },
  },
];

const filterData = {
  number: '1',
  age: '50',
};

const formatedTag = {
  id: 'number', // filter field
  field: 'Number', // field metadata name
  value: '1', // field value
};

const OnChangeEvent = {
  target: {
    value: '',
  },
};

describe('<Filter />', () => {
  it('snapshot', () => {
    const filter = mount(<Filter metadata={metadata} filter={filterData} />);
    jestExpect(toJson(filter)).toMatchSnapshot();
  });

  it('should not render a modal or button if metadata is not provided', () => {
    const filter = shallow(<Filter />);
    expect(filter.find(Button)).to.have.lengthOf(0);
    expect(filter.find(FilterModal)).to.have.lengthOf(0);
  });

  describe('modal controller', () => {
    const filter = mount(<Filter metadata={metadata} />);

    it('should open the modal when button is clicked', () => {
      filter.find(Button).simulate('click');
      filter.update();
      expect(filter.find(FilterModal).props().open).to.be.true;
    });

    it('should close the modal when onClose callback is called', () => {
      act(() => {
        filter.find(FilterModal).props().onClose();
      });
      filter.update();
      expect(filter.find(FilterModal).props().open).to.be.false;
    });
  });

  describe('onTextChange callback', () => {
    it('should be called when search input is changed', () => {
      const onTextChange = jest.fn();
      const filter = shallow(<Filter onTextChange={onTextChange} />);
      filter.find('input').simulate('change', OnChangeEvent);
      expect(onTextChange.mock.calls).to.have.lengthOf(1);
    });

    it('should not throw an error if callback is not provided', () => {
      const filter = shallow(<Filter />);
      function change() {
        filter.find('input').simulate('change', OnChangeEvent);
      }
      expect(change).to.not.throw();
    });
  });

  describe('onFilter callback', () => {
    it('should be called when onSubmit callback is called', () => {
      const onFilter = jest.fn();
      const filter = shallow(
        <Filter metadata={metadata} onFilter={onFilter} />
      );
      filter.find(FilterModal).props().onSubmit();
      expect(onFilter.mock.calls).to.have.lengthOf(1);
    });

    it('should not throw an error if callback is not provided', () => {
      const filter = shallow(<Filter metadata={metadata} />);
      function submit() {
        filter.find(FilterModal).props().onSubmit();
      }
      expect(submit).to.not.throw();
    });

    it('should be called when a Tag is deleted', () => {
      const onFilter = jest.fn();
      const filter = shallow(
        <Filter metadata={metadata} onFilter={onFilter} />
      );
      filter.find(TagList).props().onDeleteTag();
      expect(onFilter.mock.calls).to.have.lengthOf(1);
    });
  });

  it('should format Tags', () => {
    const filter = shallow(<Filter metadata={metadata} filter={filterData} />);
    const tagList = filter.find(TagList);
    const tag = tagList.props().items[0];
    expect(tag).to.deep.equal(formatedTag);
  });
});
