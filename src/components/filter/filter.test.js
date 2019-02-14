import React from 'react';
import Filter from './filter';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('should render correctly with no props', () => {
  const component = shallow(<Filter/>);
  expect(component).toMatchSnapshot();
});

it('should render correctly with props null', () => {
    const component = shallow(<Filter onTextChange={null} onChangeFilters={null} filterValues={null}/>);
    expect(component).toMatchSnapshot();
});

it('should render correctly with props', () => {
  const filters = {
    locale: 'sv_SE',
    country: 'SE',
    datetime: '2014-10-23T09:00',
    limit: '1',
    offset: '3'
  }

  const component = shallow(<Filter onTextChange={null} onChangeFilters={null} filterValues={filters}/>);
  expect(component).toMatchSnapshot();
});

