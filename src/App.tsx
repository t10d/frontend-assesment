import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
