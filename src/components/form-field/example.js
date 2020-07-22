import React, { Component } from 'react';
import { Link } from "react-router-dom";
import scrollTop from "../../helpers/on-load";

export class FormFieldExample extends Component {

    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div>
                <h1>
                    FormBuilderExample
                </h1>
                <Link to="/form-builder"><b>Back</b></Link>
            </div>
        );
    }

}
