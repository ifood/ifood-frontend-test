/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Footer from './index';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('<Footer /> rendering tests', () => {
  it('should render Footer without crashing', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toBe('Spotifood');
  });
});
