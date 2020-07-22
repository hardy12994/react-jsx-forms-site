import React, { Component } from 'react';
import '../css/index.css';
import Gist from 'react-gist';
import { Link } from "react-router-dom";
import scrollTop from "../helpers/on-load";


export class FormFieldComponent extends Component {

    componentDidMount() {
        scrollTop();
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <h2>Form Field</h2>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-field/methods"><b>View Methods</b></Link>
                    </div>
                </div>
                <hr />
                <div className="subContent row">
                    <div >
                        <div>
                            <p>Form Field is a <span className="redHC">class</span> which helps to construct your fields.
                             This will mostly used, when you are constructing your form with fields in
                         <Link to="/form-array"> Form Array</Link>. Example,
                                A person has multiple hobbies or a person has multiple nick names. At these kind of places we can use
                         this field class in <Link to="/form-array"> Form Array</Link>.</p>
                            <p>
                                It contains three parameters - <span className="redHC">Form Name</span> ,
                                 <span className="redHC">Field Name</span> ,
                                     <span className="redHC">Field Data</span>
                            </p>
                            <p>Where Field Data will be object with two keys, <span className="redHC">value</span> (String) and
                         <span className="redHC"> validations</span> (Array).</p>
                        </div>
                        <div className="subContentSubDiv">
                            <h4><b>How to use ?</b></h4>
                            <p></p>

                            <div className="noteDiv">
                                <p className="subContentSubDiv">
                                    <b>
                                        <i>
                                            <span className="redHC">NOTE : </span>
                                            When you define your input fields in JSX, the id must be same as keys where you
                                            defined your form fields keys and also the key must be unique.
                                    </i>
                                    </b>
                                </p>
                            </div>
                            <h4 className="subContentSubDiv"><b>Fields in <Link to="/form-array">Form Array</Link> -</b></h4>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='array-list-fields.js' />

                            <p>As we know that hobbies array will be the list of hobbies which is of-course not a Group, so we will
                            use <Link to="/form-field">Form Field</Link> class (Line 20) to create multiple
                            hobbies for single student</p>

                            <p className="subContentSubDiv">
                                Where you initiate the instance of form array (Line 13), second parameter which is formArray Name will
                                be same ( to your object key where you refer ), if your form array is directly refer to your
                                object key. But when your form array is present inside Form Array then second parameter will
                            be different. You can See that hobbies intilization (Line 20) 2nd param is hobby.</p>
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-sm-3 col-xs-3">

                    </div> */}
                </div>
            </div>
        );
    }
}