import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should create app', () => {
  const app = render(<App />);
  expect(app).toBeDefined();
});
