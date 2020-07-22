import React, { Component } from 'react';
import scrollTop from "../helpers/on-load";

import '../css/index.css';
import Gist from 'react-gist';
import quill from '../images/quill.png';
import happy from '../images/happy.png';
import shocked from '../images/shocked.png';
import laugh from '../images/laugh.png';
import file from '../images/file.png';
import checked from '../images/checked.png';
import copy from '../images/copy.png';
import copyToClipBoard from '../helpers/copy-text';
// import GoogleAddSenseComponent from "./google-add-sense.component";



export class IntroductionComponent extends Component {

    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <h2>Introduction <span className="version"><a href="https://www.npmjs.com/package/react-jsx-forms"><b>v1.0.0</b></a></span></h2>
                    </div>
                </div>
                <hr />
                <div className="row subContent">
                    <div>
                        <div>
                            <h4><b>What is React-JSX-Forms ?</b></h4>
                            <p><span className="redHC">React JSX Forms</span> is a NPM Module, it give's us the power to support our forms
                            which are made in REACT JS. It is just a helper module which partially works
                        like <span className="redHC">Angular Forms</span>. So if a person is aware of Angular Forms then he/she is
                                                                                                                        very much familiar with this module.
                        </p>
                        </div>

                        <div className="subContentSubDiv">
                            <h4><b>What it provides ?</b></h4>

                            <div style={{ padding: '10px' }}>
                                <p>
                                    <img src={quill} style={{ marginRight: '5px' }} alt={'quill_logo'} height="20" width="20" /> Light Weighted Module.
                            </p>
                                <p>
                                    <img src={happy} style={{ marginRight: '10px' }} alt={'happy_logo'} height="20" width="20" />
                                    Not any other new TAG's you want to learn. Eg -&nbsp;
                                    <span className="redHC">&lt;Text&gt;</span>,
                                    <span className="redHC">&lt;Field&gt;</span>,
                                    <span className="redHC">&lt;NestedField&gt;</span> etc.
                            </p>
                                <p><img src={shocked} style={{ marginRight: '10px' }} alt={'happy_logo'} height="20" width="20" />
                                    Works with superiour RSJX Library.</p>
                                <p>
                                    <img src={file} style={{ marginRight: '10px' }} alt={'happy_logo'} height="20" width="20" />
                                    Auto Synchronization mechanism through out the form.
                            </p>
                                <p>
                                    <img src={checked} style={{ marginRight: '10px' }} alt={'happy_logo'} height="20" width="20" />
                                    Validations ( Static + Custom ).
                            </p>
                                <p>
                                    <img src={laugh} style={{ marginRight: '10px' }} alt={'happy_logo'} height="20" width="20" />
                                    Works on IE Browser.
                            </p>
                            </div>
                        </div>

                        <div className="subContentSubDiv">
                            <h4><b>Installation</b></h4>
                            <div className="codeDiv row" style={{ paddingBottom: "16px" }}>
                                <div className="col-md-10 col-sm-10 col-xs-10">
                                    <span>npm &nbsp;install&nbsp; <span className="codePink">react-jsx-forms</span>&nbsp; -- save</span>
                                    <input type="text" hidden={true} value="npm install react-jsx-forms --save" id="cmd" />
                                </div>
                                <div className=" col-md-2 col-sm-2 col-xs-2 text-right" onClick={() => copyToClipBoard('cmd')}>
                                    <img src={copy} style={{
                                        marginLeft: '2px', cursor: 'pointer'
                                    }} alt='copy_logo' height="24" width="24" />
                                    {/* <span className="tooltiptext" >Click me to copy !</span> */}
                                </div>
                            </div>
                        </div>

                        <div className="subContentSubDiv">
                            <h4><b>Glimpse</b></h4>
                            {/* <script src="https://gist.github.com/hardy12994/69679243e47dc35b6014420a44afe6fd.js"></script> */}
                            <Gist id='69679243e47dc35b6014420a44afe6fd' file='glimple.js' />
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-sm-3 col-xs-3">
                        <GoogleAddSenseComponent />
                    </div> */}

                </div>
            </div>
        );
    }
}