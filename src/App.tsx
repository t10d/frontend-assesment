import React from "react";
import Routes from "./routes";
import { Router } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import history from "./services/history";

function App() {
    return (
        <Provider {...{ store }}>
            <PersistGate {...{ persistor }}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
