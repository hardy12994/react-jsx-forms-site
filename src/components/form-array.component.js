import React, { Component } from 'react';
import '../css/index.css';
import Gist from 'react-gist';
import { Link } from "react-router-dom";
import scrollTop from "../helpers/on-load";


export class FormArrayComponent extends Component {

    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <h2>Form Array</h2>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-array/methods"><b>View Methods</b></Link>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-array/example"><b>View Example</b></Link>
                    </div>
                </div>
                <hr />
                <div className="row subContent">
                    <div  >
                        <div>
                            <p>Form Array is a <span className="redHC">class</span> which helps to construct your form
                        in <span className="redHC">Array List</span> where fields are present inside field in form of
                        array. We can use this where we want same type of List inside a field.
                        Example, a person having multiple hobbies like playing basket ball, codding etc. So here we can use
                         Form Array where we want same type of fields inside a field in Form.</p>
                            <p>
                                It contains three parameters - <span className="redHC">Form Name</span> ,
                                 <span className="redHC">Form Array Name</span> ,
                                     <span className="redHC">Form Array Fields</span>
                            </p>
                        </div>
                        <div className="subContentSubDiv">
                            <h4><b>How to use ?</b></h4>
                            <p className="subContentSubDiv">Alike <Link to="/form-groups">Form Group</Link>, this will used with
                        minor changes. We will use array insted of object as collection.</p>

                            <div className="noteDiv top20pxPadding">
                                <p className="">
                                    <b>
                                        <i>
                                            <span className="redHC">NOTE : </span>
                                            When you define your input fields in JSX, the id must be same as keys where you
                                            defined your form fields keys and also the key must be unique.
                                    </i>
                                    </b>
                                </p>
                            </div>
                            <h4 className="top20pxPadding"><b><Link to="/form-field">Fields</Link> in Form Array -</b></h4>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='array-list-fields.js' />

                            <p className="subContentSubDiv">As we know that hobbies array will be the list of hobbies which is of-course not a Group, so we will
                            use <Link to="/form-field">Form Field</Link> class (Line 20) to create multiple
                            hobbies for single student</p>

                            <p className="subContentSubDiv">
                                Where you initiate the instance of form array (Line 13), second parameter which is form-array Name will
                                be same ( to your object key where you refer ) if your form array is directly refer to your
                                object key. But when your form array is present inside Form Array then second parameter will
                            be different. You can See that hobbies intilization (Line 20) second param is hobby.</p>
                        </div>

                        <div className="top20pxPadding">
                            <p>
                                <b>
                                    Let's see how to render this form fields in side the <Link to="/form-array">form array</Link>
                                </b>
                            </p>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='fields-render-in-form-array.js' />
                        </div>

                        <div>
                            <h4 className="top30pxPadding"><b><Link to="/form-groups">Groups</Link> in Form Array -</b></h4>
                            <p className="subContentSubDiv">
                                Now lets take an example with, employee details with
                                multiple addresses. So same type of object list, in this case same type of address list
                            having to single employee.</p>

                            <p>You can refer this to groups example <Link to="/form-groups"><b>Form Groups inside Form Array</b></Link></p>
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-sm-3 col-xs-3">

                    </div> */}
                </div>
            </div>
        );
    }
}