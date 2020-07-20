import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Result from '../containers/Result';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/result" exact component={Result} />
        </Switch>
    );
}