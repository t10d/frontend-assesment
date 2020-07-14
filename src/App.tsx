import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { NewDeck } from "./app/components/Deck";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/deck/new" />
        <Route exact path="/deck/new" component={NewDeck} />
        <Route exact path="/deck/:id" render={() => <div>Deck details</div>} />
      </Switch>
    </div>
  );
}

export default App;
