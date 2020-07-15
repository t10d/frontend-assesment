import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { CardForm, CardPile } from '../pages'

export default function Routes() {
  return (
    <Router>
      <div style={{ backgroundColor: 'green'}}>
        <Switch>
          <Route path="/pile">
            <CardPile />
          </Route>
          <Route path="/">
            <CardForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}