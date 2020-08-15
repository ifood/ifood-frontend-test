import React from 'react';

export const withContext = (Context, Component) => props => (
  <Context>
    <Component {...props} />
  </Context>
);
