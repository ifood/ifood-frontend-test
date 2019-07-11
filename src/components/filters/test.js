/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { SideFilters } from './index';

let wrapper;
const props = {
  filtersOptions: {},
  appliedFilters: {},
  setAppliedFilterChange: jest.fn(),
  getSpotifyPlaylistsRequest: jest.fn(),
};

beforeEach(() => {
  wrapper = shallow(<SideFilters {...props} />);
});

describe('<Filter /> rendering tests', () => {
  it('should render Filter structure without crashing', () => {
    expect(wrapper.find('h4')).toHaveLength(1);
  });
});
