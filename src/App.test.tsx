import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders deck analyzer header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/deck analyzer/i);
  expect(headerElement).toBeInTheDocument();
});
