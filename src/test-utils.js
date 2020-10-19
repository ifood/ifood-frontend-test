/*eslint-disable*/
import React from 'react';
import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

const AllTheProviders = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
