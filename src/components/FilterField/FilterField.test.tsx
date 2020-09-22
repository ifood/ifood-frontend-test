import React from 'react';

import { shallow } from 'enzyme';

import moment from 'moment';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

import { render } from '@testing-library/react';

import FilterField, { FilterFieldProps } from '.';

const mockProps: FilterFieldProps = {
  id: 'mock',
  name: 'Mock',
  onChange: jest.fn(),
};

describe('FilterField', () => {
  it('should render a text field', () => {
    const component = render(<FilterField {...mockProps} />);

    expect(component.getByTestId('text-field')).toBeDefined();
  });

  it('should render a date time picker', () => {
    const props: FilterFieldProps = {
      ...mockProps,
      validation: {
        entityType: 'DATE_TIME',
      },
    };

    const component = render(
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <FilterField {...props} />
      </MuiPickersUtilsProvider>,
    );

    expect(component.getByTestId('date-time-picker')).toBeDefined();
  });

  it('should render a date time picker', () => {
    const props: FilterFieldProps = {
      ...mockProps,
      values: [{
        name: 'mock-value',
        value: 'mock_value',
      }],
    };

    const component = render(<FilterField {...props} />);

    expect(component.getByTestId('select')).toBeDefined();
  });

  it('should create an input as type number', () => {
    const props: FilterFieldProps = {
      ...mockProps,
      validation: {
        primitiveType: 'INTEGER',
      },
    };

    const component = shallow(<FilterField {...props} />);

    expect(component.props().type).toEqual('number');
  });

  it('should change text field', () => {
    const component = shallow(<FilterField {...mockProps} />);

    component.simulate('change', { target: { value: 15 } });

    expect(component.props().value).toEqual(15);
  });

  it('should limit max value', () => {
    const props: FilterFieldProps = {
      ...mockProps,
      validation: {
        max: 50,
      },
    };

    const component = shallow(<FilterField {...props} />);

    component.simulate('change', { target: { value: 100 } });

    expect(component.props().value).toEqual('50');
  });

  it('should limit min value', () => {
    const props: FilterFieldProps = {
      ...mockProps,
      validation: {
        min: 10,
      },
    };

    const component = shallow(<FilterField {...props} />);

    component.simulate('change', { target: { value: 5 } });

    expect(component.props().value).toEqual('10');
  });

  it('should format a date', () => {
    const props: FilterFieldProps = {
      ...mockProps,
      validation: {
        min: 10,
        entityType: 'DATE_TIME',
      },
    };

    const component = shallow(<FilterField {...props} />);

    const date = moment('2020-09-19T19:30:00.000');

    component.simulate('change', date);

    expect(component.props().value).toEqual('2020-09-19T19:30:00');
  });
});
