import React from 'react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { render } from '@testing-library/react'
import Routes from '../components/Routes'
import store from '../store'

test('First Page', () => {
  const history = createMemoryHistory()
  render(
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
  expect(history.location.pathname).toBe('/')
})
