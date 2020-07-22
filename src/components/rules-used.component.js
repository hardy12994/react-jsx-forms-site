import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/index.css';
import scrollTop from "../helpers/on-load";


export class RulesUsedComponent extends Component {

    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <h2>Rules</h2>
                    </div>
                </div>
                <hr />
                <div className="row subContent">
                    <div >
                        <ul>
                            <li>
                                <p>
                                    Form Id is <b>mandatory</b>, otherwise it will throw error. It must be same in JS (on form construction).
                                </p>
                                <div className="codeDiv top20pxMargin">
                                    <p><span >&lt;</span> <span className="codePink">Forms</span>  <span className="codePink"> id</span> = <span className="codeGreen">"loginForm"</span> <span>&gt;</span></p>
                                </div>
                            </li>
                            <li className="top20pxMargin">
                                <p>
                                    The key which you will use for making Form schema (in JS)
                                     will be same as respective input id (in JSX). It must be <b> unique.</b>
                                 
                                </p>
                            </li>
                            <li className="subContentSubDiv">
                                <p>
                                    If Validations array is empty, then your error object will empty.
                                     Error object will change according to your validations.
                                </p>
                            </li>
                            <li className="subContentSubDiv">
                                <p>How <b>field validity</b> is checked ?</p>
                                <div className="left20padd">
                                    <p>
                                            First, it will check own validation.
                                    </p>
                                    <p>
                                            If field childrens (fields collection) are present in field, then their validation will be checked.
                                    </p>
                                </div>
                            </li>
                            <li className="subContentSubDiv">
                                <p> While you <b>touch</b> or make <b>dirty</b> any filed your field validity mechanism will run for
                                that particular field.</p>
                            </li>
                            <li className="subContentSubDiv">
                                <p>
                                    Auto sync (to fathers) mechanism run on these actions - <b>blur</b> , <b>keydown</b>, <b>click ( for radio's )</b>.
                                </p>
                            </li>
                            <li className="subContentSubDiv">
                                <p><b>Dynamic ID</b> (form_array) will be genrated when <Link to="/form-field"><b>Form Fields</b></Link> or <Link to="/form-groups"><b>Form Groups</b></Link> used in <Link to="/form-array"><b>Form Array</b></Link> as childrens.</p>
                            </li>

                            <li className="subContentSubDiv">
                                <p>
                                    On <b>Patching</b> the Dump Data, it must be an <b>same shadow</b> of field in which you are using it.
                            </p>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="col-md-3 col-sm-3 col-xs-3"></div> */}
                </div>
            </div>
        )
    }
}