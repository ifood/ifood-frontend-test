import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { useIntl } from 'react-intl';
import PlaylistGrid from './PlaylistGrid';

const intl = useIntl();
const items = [
  {
    id: 'id',
  },
];

describe('<PlaylistGrid />', () => {
  it('snapshot with items', () => {
    const playlistGrid = mount(<PlaylistGrid title="Grid" items={items} />);
    jestExpect(toJson(playlistGrid)).toMatchSnapshot();
  });

  it('snapshot without items', () => {
    const playlistGrid = mount(<PlaylistGrid />);
    jestExpect(toJson(playlistGrid)).toMatchSnapshot();
  });

  it('should propagate title to Grid if provided', () => {
    const title = 'Grid';
    const playlistGrid = shallow(<PlaylistGrid title={title} items={items} />);
    const gridTitle = playlistGrid.get(0).props.title;
    expect(gridTitle).to.be.equal(title);
  });

  it('should use a standard title if the title is not provided', () => {
    const title = intl.formatMessage({ id: 'featured.playlists' });
    const playlistGrid = shallow(<PlaylistGrid items={items} />);
    const gridTitle = playlistGrid.get(0).props.title;
    expect(gridTitle).to.be.equal(title);
  });
});
