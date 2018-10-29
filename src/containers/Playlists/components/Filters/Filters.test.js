import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Filters from './Filters';

describe('<Filters />', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.props = {
      onChange: jest.fn(),
      onSearch: jest.fn(),
      metaFilters: [{
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
      {
        id: 'country',
        name: 'País',
        values: [
          {
            value: 'AU',
            name: 'Australia',
          },
          {
            value: 'DE',
            name: 'Alemanhã',
          },
          {
            value: 'BR',
            name: 'Brasil',
          },
          {
            value: 'PT',
            name: 'Portugal',
          },
          {
            value: 'en_US',
            name: 'EUA',
          },
          {
            value: 'RU',
            name: 'Rússia',
          },
        ],
      },
      {
        id: 'timestamp',
        name: 'Data e Horário',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy-MM-ddTHH:mm:ss',
        },
      },
      {
        id: 'limit',
        name: 'Quantidade',
        validation: {
          primitiveType: 'INTEGER',
          min: 1,
          max: 50,
        },
      },
      {
        id: 'offset',
        name: 'Página',
        validation: {
          primitiveType: 'INTEGER',
        },
      }],
    };
  });

  describe('render()', () => {
    it('renders the content correctly', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call renderFields with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      wrapper.instance().renderFields = jest.fn();
      wrapper.setProps({ metaFilters: mocks.props.metaFilters });
      expect(wrapper.instance().renderFields).toHaveBeenCalledWith();
    });
  });

  describe('handleChange()', () => {
    it('should call setState with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      const event = {
        target: {
          value: 'pt_BR',
        },
      };
      wrapper.instance().setState = jest.fn();
      wrapper.instance().handleChange('locale')(event);
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ locale: event.target.value });
    });

    it('should call onChange with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      const event = {
        target: {
          value: 'pt_BR',
        },
      };

      wrapper.instance().handleChange('locale')(event);
      expect(mocks.props.onChange).toHaveBeenCalledWith({
        ...wrapper.state(),
        locale: event.target.value,
      });
    });
  });

  describe('handleDateChange()', () => {
    it('should call setState with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      wrapper.instance().setState = jest.fn();
      const dateString = '2018-10-28 10:25:12';
      wrapper.instance().handleDateChange(undefined, dateString);
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ timestamp: dateString });
    });

    it('should call onChange with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      const dateString = '2018-10-28 10:25:12';
      wrapper.instance().handleDateChange(undefined, dateString);
      expect(mocks.props.onChange).toHaveBeenCalledWith({
        ...wrapper.state(),
        timestamp: dateString.replace(' ', 'T'),
      });
    });
  });

  describe('onSearchChange()', () => {
    it('should call setState with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      const event = {
        target: {
          value: 'term',
        },
      };
      wrapper.instance().setState = jest.fn();
      wrapper.instance().onSearchChange(event);
      expect(wrapper.instance().setState).toHaveBeenCalledWith({ searchTerm: event.target.value });
    });

    it('should call onSearch with expected params', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      const event = {
        target: {
          value: 'pt_BR',
        },
      };
      wrapper.instance().onSearchChange(event);
      expect(mocks.props.onSearch).toHaveBeenCalledWith(event.target.value);
    });
  });

  describe('renderFields()', () => {
    it('should return the content as expected according to the meta filters', () => {
      const wrapper = shallow(<Filters {...mocks.props} />);
      wrapper.setProps({ metaFilters: mocks.props.metaFilters });
      const content = wrapper.instance().renderFields();
      expect(content).toMatchSnapshot();
    });
  });
});
