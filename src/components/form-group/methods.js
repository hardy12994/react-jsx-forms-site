import React, { Component } from 'react';
import { Link } from "react-router-dom";
import scrollTop from "../../helpers/on-load";



export class FormGroupMethods extends Component {
   
   
    componentDidMount() {
        scrollTop();
    }
   
    render() {
        return (
            <div style={{ marginBottom: '50px' }}>
                <div>
                    <h3>Form Group Methods </h3>
                </div>
                <div className="exampleContent">
                    <div className="method">
                        <div className="methodName">
                            <b>patchValue()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">value, options</span>
                            <p className="subMethodParams">Value should be Object and Options as object <span className="highlightCode">{'{ emitEvent: true | false }'}</span>.</p>
                        </div>
                        <div className="methodUse">
                            Use - Value should be exact shadow of the value present in form group.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>getValue()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">String</span>
                        </div>
                        <div className="methodUse">
                            Use - It is use for get value present in field.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>setValidators()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">Validators</span>
                            <p className="subMethodParams">Validators should be Array of Validations or <span className="highlightCode">NULL</span>.</p>
                        </div>
                        <div className="methodUse">
                            Use - It is use for setting new Validations <span className="highlightCode">( NULL || [Validations] )</span>.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>setErrors()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">Error</span>
                            <p className="subMethodParams">Error should be Object of Error keys or <span className="highlightCode">NULL</span>.</p>
                        </div>
                        <div className="methodUse">
                            Use - It is use for setting Erorrs <span className="highlightCode">( NULL || {'{ [key]: true | false }'} )</span>.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>hasError()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">BOOLEAN || NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">Error Key</span>
                            <p className="subMethodParams">Error Key should be String.</p>
                        </div>
                        <div className="methodUse">
                            Use - It is use for check what is the status <span className="highlightCode">( BOOLEAN || NULL )</span> provided error key.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>makeDirty()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">Dirty Value</span>
                            <p className="subMethodParams">Dirty Value should be <span className="highlightCode">Boolean</span>, default is <span className="highlightCode">true</span>.</p>
                        </div>
                        <div className="methodUse">
                            Use - It is use to set dirty value for field <span className="highlightCode">( BOOLEAN )</span>.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>makeTouched()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">Touched Value</span>
                            <p className="subMethodParams">Touched Value should be <span className="highlightCode">Boolean</span>, default is <span className="highlightCode">true</span>.</p>
                        </div>
                        <div className="methodUse">
                            Use - It is use to set touch value for field <span className="highlightCode">( BOOLEAN )</span>.
                        </div>
                    </div>
                    <div className="method">
                        <div className="methodName">
                            <b>updateValueAndValidity()</b>
                        </div>
                        <div className="methodReturn">
                            Returns - <span className="highlightCode">NULL</span>
                        </div>
                        <div className="methodParams">
                            Params - <span className="highlightCode">Properties ( non-mandatory )</span>
                            <p className="subMethodParams">Properties should be Object <span className="highlightCode">{'{ onlySelf: true | false ,emitEvent: true | false}'}</span>.
                              Default - <span className="highlightCode">onlySelf = false</span> ,<span className="highlightCode">emitEvent = false</span>.</p>
                        </div>
                        <div className="methodUse">
                            <p>
                                Use - Update value in one step up in form, validate when value is update, update field validity, if <span className="highlightCode">onlySelf = true</span> then it will only update fields value and not sync above.
                             If <span className="highlightCode">emitEvent = true</span> then it will emit value where ever you have subscribe form/field.</p>
                        </div>
                    </div>
                </div>
                <Link to="/form-groups"><b>Back</b></Link>
            </div>
        );
    }
}