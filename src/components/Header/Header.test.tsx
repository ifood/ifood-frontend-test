import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  test('Simple render', () => {
    const { container } = render(<Header />);

    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('h1')?.textContent).toBe('Spotifood');
  });
});
