import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NewDeck from './pages/DeckNew';
import DeckId from './pages/DeckId';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/deck/new" exact component={NewDeck} />
        <Route path="/deck/:id" exact component={DeckId} />
        <Redirect from="/" to="/deck/new" />
      </Switch>
    </BrowserRouter>
  );
}