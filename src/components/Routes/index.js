import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Route from './Route'
import Layout from '../Layout'
import Result from '../Result'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/deck/new' exact component={Layout} />
      <Route path='/deck/:id' exact component={Result} />
      <Redirect from='*' to='/deck/new' />
    </Switch>
  </BrowserRouter>
)

export default Routes
