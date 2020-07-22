import React, { Component } from 'react';
import '../css/index.css';
import Gist from 'react-gist';
// import { Link } from "react-router-dom";
import scrollTop from "../helpers/on-load";



let StaticValidation = () => (
    <div>
        <p>
            Static Validations, are the inbuilt validations. These are pre-define validations which are ready to use just you have to define it.
        </p>
        <h5 className="top30pxPadding"><b>List of Static Validations</b></h5>
        <ul>
            <li className="subContentSubDiv"><span className="redHC">required( )</span>, returns true when field is empty.</li>
            <li className="subContentSubDiv"><span className="redHC">pattern( PATTERN )</span>, returns true when input value is not match your provided pattern.</li>
            <li className="subContentSubDiv"><span className="redHC">minChar( LENGTH )</span>, returns true when your input value length is less than provided value lenght.</li>

            <div className="codeDiv">
                <p>Provided length = <span className="codePink">3</span></p>
                <p>Value =<span className="codePink"> "hardy" </span><span className="codeGreen">    {'// false'}</span>  </p>
                <p>Value =<span className="codePink"> "har" </span><span className="codeGreen">    {'// false'}</span></p>
                <p>Value =<span className="codePink"> "ha" </span><span className="codeGreen">    {'// true'}</span> </p>
            </div>

            <li className="top30pxPadding"><span className="redHC">maxChar( LENGTH )</span>, returns true when your input value length is more than provided value lenght.</li>

            <div className="codeDiv">
                <p>Provided length = <span className="codePink">3</span></p>
                <p>Value =<span className="codePink"> "hardy" </span><span className="codeGreen">    {'// true'}</span>  </p>
                <p>Value =<span className="codePink"> "har" </span><span className="codeGreen">    {'// false'}</span></p>
                <p>Value =<span className="codePink"> "ha" </span><span className="codeGreen">    {'// false'}</span> </p>
            </div>

            <li className="top30pxPadding"><span className="redHC">matchLength( LENGTH )</span>, returns true when your input value length not matched provided value lenght.</li>

            <div className="codeDiv">
                <p>Provided length = <span className="codePink">3</span></p>
                <p>Value =<span className="codePink"> "hardy" </span><span className="codeGreen">    {'// true'}</span>  </p>
                <p>Value =<span className="codePink"> "har" </span><span className="codeGreen">    {'// false'}</span></p>
                <p>Value =<span className="codePink"> "ha" </span><span className="codeGreen">    {'// true'}</span> </p>
            </div>

            <li className="top30pxPadding"><span className="redHC">matchStringText( STRING )</span>, returns true when your input value string not matched provided value.</li>

            <div className="codeDiv">
                <p>Provided string = <span className="codePink">"hardy"</span></p>
                <p>Value =<span className="codePink"> "hardy" </span><span className="codeGreen">    {'// false'}</span>  </p>
                <p>Value =<span className="codePink"> "har" </span><span className="codeGreen">    {'// true'}</span></p>
                <p>Value =<span className="codePink"> "ha" </span><span className="codeGreen">    {'// true'}</span> </p>
            </div>

        </ul>
    </div>
);


let CustomValidation = () => (
    <div>
        <p>Custom Valdation, in this you can make your own validations as per your requirements.</p>
        <p>If <span className="redHC">true</span> is return, then the respective field will be invalid otherwise valid.</p>
        <h5 className="top30pxPadding"><b>Syntax</b></h5>
        <Gist id='69679243e47dc35b6014420a44afe6fd' file="custom-validator.js" />
    </div>
);



export class ValidationsComponent extends Component {


    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <h2>Validations</h2>
                    </div>
                </div>
                <hr />
                <div className="row subContent">
                    <div >
                        <div>
                            <p>Validations, it is a <span className="redHC">class</span> that can help you to check weather
                        the field is valid or not.</p>
                            <p>This can be set, just next where field value is define.</p>
                            <p>Whenever you set the Vaidations your error object changes on field valid or invalid.</p>
                        </div>

                        <div className="subContentSubDiv">
                            <h3><b>Valdations are of two types -</b></h3>

                            <h4 className="top30pxPadding"><b>Static Validations</b></h4>
                            <StaticValidation />

                            <h4 className="top30pxPadding"><b>Custom Validations</b></h4>
                            <CustomValidation />
                        </div>

                    </div>
                    {/* <div className="col-md-3 col-sm-3 col-xs-3"></div> */}
                </div>
            </div>
        );
    }
}