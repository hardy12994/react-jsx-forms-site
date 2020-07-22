import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppConfig } from "./app.config";
import "./css/index.css";


class App extends Component {

    render() {
        return (
            <AppConfig></AppConfig>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));