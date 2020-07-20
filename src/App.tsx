import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NewDeck } from "./app/components/Deck";
import DeckInfo from "./app/components/Deck/components/DeckInfo";

function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect exact from="/" to="/deck/new" />
        <Route exact path="/deck/new" component={NewDeck} />
        <Route exact path="/deck/:id" component={DeckInfo} />
      </Switch>
    </div>
  );
}

export default App;
