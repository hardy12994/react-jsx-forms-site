import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Validators, FormBuilder, Forms } from "react-jsx-forms";
import scrollTop from "../../helpers/on-load";


const REGX_MOBILE = /[6-9]{1}[0-9]{9}/;


export class FormBuilderExample extends Component {

    constructor(props) {
        super(props);
        this.formInit();
        this.state = {
            loginForm: { ...this.loginForm }
        }
        this.handelChangeEvent = this.handelChangeEvent.bind(this);
    }

    componentDidMount() {
        scrollTop();
        this.activateSubscribers();
    }

    activateSubscribers() {
        //helps to make sync your form
        let formObservable = this.loginForm
            .valueChanges
            .subscribe(form => {
                this.setState({
                    ...this.state,
                    loginForm: form.loginForm
                });
            });
        this.unsubscribeObservables = [formObservable];
    }

    formInit() {
        var fields = {
            phone: {
                value: '',
                validations: [Validators.required(), Validators.pattern(REGX_MOBILE)]
            },
            password: {
                value: '',
                validations: [Validators.required()]
            }
        };

        //loginForm is name of your form
        this.loginForm = new FormBuilder('loginForm', fields);
    }

    handelChangeEvent(event) {
        this.loginForm.fields[event.target.id].setValue(event.target.value);
        this.loginForm.fields[event.target.id].updateValueAndValidity({ emitEvent: true });
    }


    myLoginForm(phone, password, form) {
        return (
            <Forms id="loginForm">

                <div className="form-group ">
                    <label className="control-label col-sm-2 setLabelPadd" htmlFor="email">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control mar10px" id="phone"
                            onChange={this.handelChangeEvent} value={phone.value}
                            placeholder="Enter Phone Number" />
                        {phone.error &&
                            (phone.touched && phone.error.required)
                            ? <span className="error">Field is Required</span>
                            : <span></span>
                        }
                        {phone.error &&
                            (phone.touched && phone.error.pattern)
                            ? <span className="error">Field is Invalid</span>
                            : <span></span>
                        }
                    </div>
                </div>

                <div className="form-group ">
                    <label className="control-label col-sm-2 setLabelPadd" htmlFor="email">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control mar10px" id="password"
                            onChange={this.handelChangeEvent} value={password.value}
                            placeholder="Set Password" />
                        {password.error &&
                            (password.touched && password.error.required)
                            ? <span className="error">Field is Required</span>
                            : <span></span>
                        }
                    </div>
                </div>

                <div className="text-center">
                    <button type="button" className={form.valid ? 'green submitBtm' : 'red submitBtm'} >Submit</button>
                </div>
            </Forms>
        );
    }

    render() {
        let phone = this.state.loginForm.fields.phone;
        let form = this.state.loginForm;
        let password = this.state.loginForm.fields.password;

        return (
            <div style={{ margin: '20px 0px' }}>
                <h5> <Link to="/form-builder"><b>Form Builder</b></Link>{` > `}<Link to="/form-builder/example"><b>Example</b></Link></h5>

                <p className="exampleContent">
                    This is login form, in which two fields are described <span className="redHC">Phone</span> and <span className="redHC">Password</span> with respective
                    types. Phone field have to pass two validators to become valid field and Password has to pass one validator for same. If
                    both validation passes then only this login form is valid otherwise not. You can get this code <a href="">here</a>.
                </p>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-1 col-sm-0 col-xs-0">

                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 loginDiv">
                        <h5 className="text-center"><b>Login</b></h5>
                        {this.myLoginForm(phone, password, form)}
                    </div>
                    <div className="col-md-1 col-sm-0 col-xs-0">
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 result">
                        <div>
                            <h5>PHONE</h5>
                            <span> Touched: <b>{`${phone.touched}`}</b>, Dirty: <b>{`${phone.dirty}`}</b>,
                    Valid: <b>{`${phone.valid}`}</b>, Errors: <b>{`${JSON.stringify(phone.error)}`}</b></span>
                        </div>
                        <hr />

                        <div>
                            <h5>PASSWORD</h5>
                            <span> Touched: <b>{`${password.touched}`}</b>, Dirty: <b>{`${password.dirty}`}</b>,
                    Valid: <b>{`${password.valid}`}</b>, Errors: <b>{`${JSON.stringify(password.error)}`}</b></span>
                        </div>
                        <hr />
                        <div>
                            <h5>FORM</h5>
                            <span> Touched: <b>{`${form.touched}`}</b>, Dirty: <b>{`${form.dirty}`}</b>,
                    Valid: <b>{`${form.valid}`}</b>, Errors: <b>{`${JSON.stringify(form.error)}`}</b></span>
                        </div>
                    </div>
                </div>
                <Link to="/form-builder"><b>Back</b></Link>

            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribeObservables.forEach(item => item.unsubscribe());
    }
}
