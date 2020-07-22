import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Provider {...{ store }}>
            <PersistGate {...{ persistor }}>
                <BrowserRouter>
                    <Routes />
                    <GlobalStyle />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
