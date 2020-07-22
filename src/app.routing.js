import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BaseComponent from './components/root.component';
// import { NotFoundComponent } from "./components/not-found.component";
export class AppRouting extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch> {/*This will help to choose only one from all routes*/}
                    <Route path="/" component={BaseComponent} />
                    {/* <Redirect from="/" to="/introduction" /> */}
                    {/* <Route path="/oops" component={NotFoundComponent} /> */}
                </Switch>
            </BrowserRouter>
        );
    }
}