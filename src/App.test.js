/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from './App';

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});

describe('<App /> rendering tests', () => {
  it('should render a App without crashing', () => {
    expect(wrapper.find('#root')).toBeDefined();
  });
});
