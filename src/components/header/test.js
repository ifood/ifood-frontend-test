/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Header from './index';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('<Header /> rendering tests', () => {
  it('should render Header without crashing', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toBe('Spotifood');
  });
});
