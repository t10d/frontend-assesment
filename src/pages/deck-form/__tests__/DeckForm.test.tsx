import React from 'react';
import { Route } from 'react-router-dom';
import { screen, renderWithRouter } from '../../../utils/test-utils';
import DeckForm from '../DeckForm';

test('renders deck analyzer header', () => {
  renderWithRouter(<Route path="/deck/new" component={DeckForm} />);

  const headerElement = screen.getByText('Cards');
  expect(headerElement).toBeInTheDocument();
});
