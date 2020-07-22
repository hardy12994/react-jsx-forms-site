import React, { Component } from 'react';
import '../css/index.css';
import Gist from 'react-gist';
import { Link } from "react-router-dom";
import scrollTop from "../helpers/on-load";


export class FormBuilderComponent extends Component {

    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <h2>Form Builder</h2>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-builder/methods"><b>View Methods</b></Link>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-builder/example"><b>View Example</b></Link>
                    </div>
                </div>
                <hr />
                <div className="row subContent">
                    <div >
                        <div>
                            <p>Form Builder is a <span className="redHC">class</span> which helps to construct your form and provides
                            functionalities maintain your form. This builder will use every time where we use react-jsx-forms to build
                            our form atleast once.
                            </p>
                            <p>Form Builder contains two parameters - <span className="redHC">Main Form Name</span> , <span className="redHC">Fields of Form</span></p>
                        </div>

                        <div className="subContentSubDiv">
                            <h4><b>How to use ?</b></h4>
                            <p>
                                As we have seen in glimpse, first we have to define our fields which will be present in our form.
                                If you want to add  <span className="redHC">Validations</span> in the field as bellow for phone is required and it should follow your give mobile pattern.
                                If your field pass this validation then your field and your form will valid otherwise it's invalid.
                            </p>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='file-builder-fields.js' />
                        </div>
                        <div className="subContentSubDiv">
                            <p>Now you can use this in your JSX part in <span className="redHC">render()</span> method and play with this form.</p>

                            <div className="noteDiv">
                                <p className="subContentSubDiv"><b><i><span className="redHC">NOTE : </span> 
                                When you define your input fields in JSX, the id must be same as keys where you
                                            defined your form fields keys and also the key must be unique.
                                </i></b></p>
                            </div>

                            <h5 className="subContentSubDiv"><b>Observe some in-built methods are used i.e -</b></h5>
                            <ul>
                                <li className="subContentSubDiv"><span className="redHC">valueChanges()</span> is an Observable (Behaviour Subject), this helps to sync your Form.</li>
                                <li className="subContentSubDiv"><span className="redHC">setValue()</span> method helps to set value in field only</li>
                                <li className="subContentSubDiv">After setValue() method <span className="redHC">updateValueAndValidity()</span> is called to check validity of Field or Form.</li>
                                <li className="subContentSubDiv"><span className="redHC">emitEvent</span> will trigger your valueChanges() to make sync your form</li>
                            </ul>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='file-builder-renderFields.js' />
                        </div>
                    </div>
                    
                    {/* <div className="col-md-3 col-sm-3 col-xs-3">

                    </div> */}

                </div>
            </div>
        );
    }
}