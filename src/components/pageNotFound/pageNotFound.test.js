import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PageNotFound from './pageNotFound';
import Header from '../header/header';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PageNotFound />)
});

it('renders PageNotFound without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageNotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});



