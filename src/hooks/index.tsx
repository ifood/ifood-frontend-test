import React from 'react';

import { PlaylistProvider } from './playlists';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <PlaylistProvider>
    <ToastProvider>{children}</ToastProvider>
  </PlaylistProvider>
);

export default AppProvider;
