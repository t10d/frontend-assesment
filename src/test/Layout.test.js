import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import Layout from '../components/Layout'
import store from '../store'

test('First Page', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <Layout />
    </Provider>
  )
  const limpar = getByText('Limpar Cartas')
  expect(limpar).toBeInTheDocument()
  const enviar = getByText('Enviar Cartas')
  expect(enviar).toBeInTheDocument() //pivot-area
  const pivot = getByTestId('pivot-area')
  expect(pivot).toBeInTheDocument()
  const listOfCards = getByTestId('list-cards-area')
  expect(listOfCards).toBeInTheDocument()
})