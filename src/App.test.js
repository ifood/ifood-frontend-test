import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render correctly with no props', () => {
  const component = shallow(<App/>);
  expect(component).toMatchSnapshot();
});

it('buildFilterUrl method should return the properly value', () => {
  const component = shallow(<App/>);
  const inst = component.instance();
  let resultExpected = "https://api.spotify.com/v1/browse/featured-playlists?country=SE&locale=sv_SE&timestamp=2014-10-23T09%3A00%3A00&limit=1&offset=5";

  let filterTest = {
    locale: 'sv_SE',
    country: 'SE',
    datetime: '2014-10-23T09:00',
    limit: '1',
    offset: '5'
  };
  
  let renderLinks = inst.buildFilterUrl(filterTest);
  expect(renderLinks).toBe(resultExpected);

  filterTest = {
    locale: '',
    country: 'BR',
    datetime: '',
    limit: '1',
    offset: ''
  };
  resultExpected = "https://api.spotify.com/v1/browse/featured-playlists?country=BR&limit=1";
  renderLinks = inst.buildFilterUrl(filterTest);
  expect(renderLinks).toBe(resultExpected);
});

it('buildFilterUrl method should return the properly value when there is no filter values', () => {
  const component = shallow(<App/>);
  const inst = component.instance();
  const resultExpected = "https://api.spotify.com/v1/browse/featured-playlists";

  const filterTest = {
    locale: '',
    country: '',
    datetime: '',
    limit: '',
    offset: ''
  };
  
  const renderLinks = inst.buildFilterUrl(filterTest);
  expect(renderLinks).toBe(resultExpected);
});


