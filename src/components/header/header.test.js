import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />)
});

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('navBar title text should be "SpotiFood"', () => {
  expect(wrapper.find('#title').text()).toBe('SpotiFood');
});