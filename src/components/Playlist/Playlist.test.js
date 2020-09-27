import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import Playlist from '.';
import intl from '../../services/i18n';

const renderWithReactIntl = (component) => {
  return render(<IntlProvider {...intl}>{component}</IntlProvider>);
};

test('renders playlist item', () => {
  const playlist = {
    images: [],
    name: 'Playlist item',
    owner: {
      display_name: 'Playlist owner',
    },
    tracks: {
      total: 1,
    },
  };

  const { getByText } = renderWithReactIntl(<Playlist data={playlist} />);
  const textElement = getByText(/Playlist item/i);
  expect(textElement).toBeInTheDocument();
});
