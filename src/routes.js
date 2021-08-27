import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from "./Pages/Home/index";
import Success from "./Pages/Success/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/success" component={Success} />
            </Switch>
        </BrowserRouter>
    );
}
