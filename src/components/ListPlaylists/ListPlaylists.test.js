import React from 'react';
import shallow from 'enzyme/shallow';
import { CircularProgress } from '@material-ui/core';
import { RawListPlaylists } from './ListPlaylists';

jest.mock('../../services/services');

const defaultProps = {
  formValues: {},
};
const setup = () => shallow(
  <RawListPlaylists
    {...defaultProps}
  />,
);

describe('ListPlaylists', () => {
  it('should render circular progress when component is loading', () => {
    const wrapper = setup();

    expect(wrapper.find(CircularProgress).exists()).toBe(true);
  });
});
