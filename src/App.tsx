import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import DeckForm from './pages/deck-form/DeckForm';
import DeckInfo from './pages/DeckInfo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/deck/new" />
        </Route>
        <Route path="/deck/new" component={DeckForm} />
        <Route path="/deck/:deckId" component={DeckInfo} />
      </Switch>
    </Router>
  );
}
