import React from 'react';
import shallow from 'enzyme/shallow';
import { CircularProgress } from '@material-ui/core';

import { RawFilters } from './Filters';
import SelectField from '../Fields/SelectField';
import InputField from '../Fields/InputField';
import DateTimeField from '../Fields/DateTimeFIeld';

jest.mock('../../services/services');

const defaultProps = {
  pristine: true,
  reset: () => {},
};

const setup = (overrideProps) => shallow(
  <RawFilters
    {...defaultProps}
    {...overrideProps}
  />,
);

describe('Filters', () => {
  it('should render CircularProgress when getting filters', () => {
    const wrapper = setup();
    expect(wrapper.find(CircularProgress).exists()).toBe(true);
  });

  it('should render Filters when get filters', async () => {
    const wrapper = setup();

    await wrapper.instance().componentDidMount();
    await wrapper.update();

    expect(wrapper.find("[data-test-id='filter-item']")).toHaveLength(5);
  });

  it('should render SelectField component when filter id is locale', () => {
    const wrapper = setup();
    const result = wrapper.instance().renderFilters({ id: 'locale' });

    expect(result.type).toBe(SelectField);
  });

  it('should render SelectField component when filter id is country', () => {
    const wrapper = setup();
    const result = wrapper.instance().renderFilters({ id: 'country' });

    expect(result.type).toBe(SelectField);
  });

  it('should render InputField component when filter id is limit', () => {
    const wrapper = setup();
    const result = wrapper.instance().renderFilters({ id: 'limit' });

    expect(result.type).toBe(InputField);
  });

  it('should render InputField component when filter id is offset', () => {
    const wrapper = setup();
    const result = wrapper.instance().renderFilters({ id: 'offset' });

    expect(result.type).toBe(InputField);
  });

  it('shoud render DateTimeField component when filter is not mapped', () => {
    const wrapper = setup();
    const result = wrapper.instance().renderFilters({ id: 'timestamp' });

    expect(result.type).toBe(DateTimeField);
  });
});
