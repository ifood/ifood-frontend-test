import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectField from './SelectField';

describe('<SelectField />', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.props = {
      onChange: jest.fn(),
      value: 'en_AU',
      field: {
        id: 'locale',
        name: 'Locale',
        values: [{
          value: 'en_AU',
          name: 'en_AU',
        },
        {
          value: 'de_DE',
          name: 'de_DE ',
        },
        {
          value: 'pt_BR',
          name: 'pt_BR',
        },
        {
          value: 'fr_FR',
          name: 'fr_FR',
        },
        {
          value: 'en_US',
          name: 'en_US',
        },
        {
          value: 'es_AR',
          name: 'es_AR',
        }],
      },
    };
  });

  describe('render()', () => {
    it('renders the content correctly when field is defined', () => {
      const wrapper = shallow(<SelectField {...mocks.props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the content correctly when field is undefined', () => {
      const wrapper = shallow(<SelectField {...mocks.props} />);
      wrapper.setProps({ field: null });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call renderValues with expected params', () => {
      const wrapper = shallow(<SelectField {...mocks.props} />);
      wrapper.instance().renderValues = jest.fn();
      wrapper.setProps({ field: mocks.props.field });
      expect(wrapper.instance().renderValues).toHaveBeenCalledWith();
    });
  });


  describe('renderValues()', () => {
    it('should return the content as expected according to the field', () => {
      const wrapper = shallow(<SelectField {...mocks.props} />);
      wrapper.setProps({ field: mocks.props.field });
      const content = wrapper.instance().renderValues();
      expect(content).toMatchSnapshot();
    });
  });
});
