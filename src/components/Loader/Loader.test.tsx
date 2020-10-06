import React from 'react';
import { render } from '@testing-library/react';

import './Loader';
import Loader from './Loader';

describe('Loader component', () => {
  test('Simple render', () => {
    const { container } = render(<Loader />);
    expect(container.querySelector('.loader')).toBeInTheDocument();
  });
});
