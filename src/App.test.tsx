import React from 'react';
import { render } from './utils/test-utils';
import App from './App';

test('renders deck analyzer header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText('Cards');
  expect(headerElement).toBeInTheDocument();
});
