import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Filters from './filters-playlist';
import { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import playlistDataMock from '../../__mocks__/playlistDataMock';

configure({ adapter: new EnzymeAdapter() });

let wrapper;
let baseProps = {};

beforeEach(() => {
  baseProps = {
    setNameSearch: jest.fn(),
    setFilters: jest.fn(),
    filters: playlistDataMock.mockFilters
  };
  wrapper = shallow(<Filters {...baseProps} />)
});

it('renders List without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filters />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('change input name and call setNameSearch props', () => {
  wrapper.find('#name').simulate('change', { target: { value: 'New Value' } });
  expect(baseProps.setNameSearch).toHaveBeenCalledTimes(1);
});

it('change input country and call setFilters props', () => {
  wrapper.find('#country').simulate('change', { target: { value: 'Brasil' } });
  expect(baseProps.setFilters).toHaveBeenCalledTimes(1);
});



