import React from 'react'
import { render } from '@testing-library/react'
import Header from '../components/Header'

test('Renders Header', () => {
  const { getByRole } = render(<Header />)
  const button = getByRole('button')
  expect(button).toBeInTheDocument()
})