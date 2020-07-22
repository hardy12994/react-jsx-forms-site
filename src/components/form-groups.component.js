import React, { Component } from 'react';
import '../css/index.css';
import Gist from 'react-gist';
import { Link } from "react-router-dom";

import scrollTop from "../helpers/on-load";

export class FormGroupComponent extends Component {

    componentDidMount() {
        scrollTop();
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <h2>Form Group</h2>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-groups/methods"><b>View Methods</b></Link>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 top30pxPadding">
                        <Link to="form-groups/example"><b>View Example</b></Link>
                    </div>
                </div>
                <hr />
                <div className="row subContent">
                    <div>
                        <div>
                            <p>Form Group is a <span className="redHC">class</span> which helps to construct your form
                        in <span className="redHC">object manner</span> where fields are present inside field in an object with user defined keys.
                                                                                            We can use this where a thing having things inside it. Example, a employee having address and in address their are multiple
                                                                                            fields, AddressLine1, AddressLine1, Pincode, City, State etc. So here we can use Form Group where we get fields inside
                        a field in object structure.</p>
                            <p>
                                Form Group contains three parameters - <span className="redHC">Form Name</span> ,
                                 <span className="redHC">Form Group Name</span> ,
                                     <span className="redHC">Form Group Fields</span>
                            </p>
                        </div>
                        <div className="subContentSubDiv">
                            <h4><b>How to use ?</b></h4>
                            <p className="subContentSubDiv">Alike <Link to="/form-builder">FormBuilder</Link>, this will used with little changes. Three parameters will be present here.</p>

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
                            <h4 className="subContentSubDiv"><b>Form Group inside Form -</b></h4>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='file-group-fields.js' />

                            <p className="subContentSubDiv">
                                Where you initiate the instance of form group (Line 34), second parameter which is formGroup Name will
                                be same ( to your object key where you refer ), if your form group is directly refer to your
                                object key. But when your group is present inside Form Array then second parameter will
                            be different.</p>

                            <p><b>Render Part is same, just like we have used is <Link to="/form-builder">Form Builder</Link></b></p>
                        </div>

                        <div>
                            <h4 className="top30pxPadding"><b>Form Group inside <Link to="/form-array">Form Array</Link> -</b></h4>
                            <p className="subContentSubDiv">
                                Now lets take an example with little twist, same scenario a employee details but now with
                                multiple addresses. So same type of object list, in this case same type of address list
                            having to single employee.</p>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='file-group-fields-in-form-array.js' />

                            <p className="top20pxPadding">
                                Above observe that the key in second parameter of <Link to="/form-array">Form Array</Link> and where it refer to are same
                           where the instance of <Link to="/form-array">Form Array</Link> is Created (Line 36). But the Form Groups intilize as field
                                 in form array (Line 29), notice that formgroup name is different with that key (where form array
                                 is refer to). Because now group is not direclty refering to the key, it is not the part of main form directly,
                            it is now part of <Link to="/form-array">Form Array</Link> that's why the key is different.</p>
                        </div>
                        <div className="top20pxPadding">
                            <p>
                                <b>
                                    Let's see how to render this form groups in side the <Link to="/form-array">form array</Link>
                                </b>
                            </p>
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='file-group-render-in-form-array.js' />
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-sm-3 col-xs-3">

                    </div> */}
                </div>
            </div>
        );
    }
}