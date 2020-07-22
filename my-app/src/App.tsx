import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NewDeck from "./pages/NewDeck";
import HomePage from "./pages/HomePage";
import DeckPage from "./pages/DeckPage";
import { StateProvider, initialGlobalState } from "./state";
import mainReducer from "./state/reducers";

function App() {
  return (
    <StateProvider initialState={initialGlobalState} reducer={mainReducer}>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/deck/new" component={NewDeck} />
          <Route exact path="/decks/:id" component={DeckPage} />
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
