import { memo } from 'react';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const SpotifyButton = withStyles(() => ({
  root: {
    width: '240px',
    height: '48px',
    borderRadius: '24px',
    color: '#ffffff',
    fontSize: '16px',
    backgroundColor: '#168d40',
    '&:hover': {
      backgroundColor: '#1ed760',
    },
  },
}))(Button);

export default memo(SpotifyButton);
