import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('../services/auth.service');

describe('App', () => {
  test('Simple render', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.app-component')).toBeInTheDocument();
  });
});
