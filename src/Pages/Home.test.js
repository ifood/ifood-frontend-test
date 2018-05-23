import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const home = shallow((
      <Home />
    ))

    expect(home).toMatchSnapshot();
  });
});
