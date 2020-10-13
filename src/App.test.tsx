import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Fake test yet ', () => {
  const { getByText } = render(<App />);
  expect(true).toBe(true);
});
