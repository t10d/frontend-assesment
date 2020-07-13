import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import DeckForm from './pages/deck-form/DeckForm';
import DeckInfo from './pages/deck-info/DeckInfo';
import PageNotFound from './pages/page-not-found/PageNotFound';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/deck/new" />
        </Route>
        <Route path="/deck/new" component={DeckForm} />
        <Route path="/deck/:deckId" component={DeckInfo} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
