import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilterModal from './FilterModal';

const metadata = [
  {
    id: 'number',
    name: 'Number',
    validation: {
      primitiveType: 'INTEGER',
    },
  },
];

describe('<FilterModal />', () => {
  it('snapshot', () => {
    const filterModal = mount(<FilterModal open />);
    jestExpect(toJson(filterModal)).toMatchSnapshot();
  });

  describe('when form is submited', () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    const filterModal = mount(
      <FilterModal
        metadata={metadata}
        onSubmit={onSubmit}
        onClose={onClose}
        open
      />
    );
    filterModal.find('form').simulate('submit');
    it('should call onSubmit', () => {
      expect(onSubmit.mock.calls).to.have.lengthOf(1);
    });

    it('should call onClose', () => {
      expect(onClose.mock.calls).to.have.lengthOf(1);
    });
  });

  it('should call onClose when cancel button is clicked', () => {
    const onClose = jest.fn();
    const filterModal = mount(
      <FilterModal metadata={metadata} onClose={onClose} open />
    );
    filterModal.find('button#modalFilter-cancel').simulate('click');
    expect(onClose.mock.calls).to.have.lengthOf(1);
  });

  it('should not throw any error if callbacks are not provided', () => {
    const filterModal = mount(<FilterModal metadata={metadata} open />);
    function safe() {
      filterModal.find('form').simulate('submit');
      filterModal.find('button#modalFilter-cancel').simulate('click');
    }
    expect(safe).to.not.throw();
  });
});
