import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Footer from '../components/Footer'

test('Renders Footer', () => {
  const { getByText, getByRole } = render(<Footer />)
  const linkElement = getByText('Diogo Gutierre')
  expect(linkElement).toBeInTheDocument()
  const button = getByRole('button')
  expect(button).toBeInTheDocument()
  fireEvent.click(button)
})