import React from 'react';

import { FiltersProvider } from './filters';

const AppProvider: React.FC = ({ children }) => (
  <FiltersProvider>{children}</FiltersProvider>
);

export default AppProvider;
