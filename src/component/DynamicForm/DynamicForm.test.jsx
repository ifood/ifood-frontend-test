import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import DynamicForm from './DynamicForm';
import DynamicField from '../DynamicField';

const metadata = [
  {
    id: 'limit',
    name: 'Quantidade',
    validation: {
      primitiveType: 'INTEGER',
      min: 1,
      max: 50,
    },
  },
];

const data = {
  limit: '10',
};

describe('<DynamicForm />', () => {
  it('snapshot', () => {
    const dynamicForm = mount(<DynamicForm metadata={metadata} />);
    jestExpect(toJson(dynamicForm)).toMatchSnapshot();
  });

  it('should return null if metadata is not provided', () => {
    const dynamicForm = shallow(<DynamicForm />);
    expect(dynamicForm.type()).to.be.null;
  });

  it('should use prop data as initial value for innerData', () => {
    const dynamicForm = shallow(<DynamicForm data={data} />);
    expect(dynamicForm.state().innerData).to.be.equal(data);
  });

  describe('when form is submited', () => {
    const onSubmit = jest.fn();
    const dynamicForm = mount(
      <DynamicForm data={data} metadata={metadata} onSubmit={onSubmit} />
    );

    it('should call onSubmit', () => {
      dynamicForm.find('form').simulate('submit');
      expect(onSubmit.mock.calls).to.have.lengthOf(1);
    });

    it('should call onSubmit with innerData as param', () => {
      dynamicForm.find('form').simulate('submit');
      expect(onSubmit.mock.calls[0][0]).to.be.equal(
        dynamicForm.state().innerData
      );
    });

    it('should not throw an error if onSubmit was not provided', () => {
      dynamicForm.setProps({ onSubmit: null });
      function submit() {
        dynamicForm.find('form').simulate('submit');
      }
      expect(submit).to.not.throw();
    });
  });

  describe('when a DynamicField is changed', () => {
    const dynamicForm = shallow(<DynamicForm metadata={metadata} />);
    const dynamicField = dynamicForm.find(DynamicField);
    const props = dynamicField.props();
    const field = props.metadata.id;
    const value = 'some value';

    it('should change internal state to the new value', () => {
      props.onChange({ field, value });
      expect(dynamicForm.state().innerData).to.deep.equal({
        [field]: value,
      });
    });

    it('should remove from internal state if new value is null', () => {
      props.onChange({ field });
      expect(dynamicForm.state().innerData).to.deep.equal({});
    });

    it('should remove from internal state if new value is an empty string', () => {
      props.onChange({ field, value: '' });
      expect(dynamicForm.state().innerData).to.deep.equal({});
    });
  });
});
