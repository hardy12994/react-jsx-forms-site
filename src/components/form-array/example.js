import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Validators, FormBuilder, FormField, FormArray, Forms } from "react-jsx-forms";
import scrollTop from "../../helpers/on-load";


export class FormArrayExample extends Component {

    constructor(props) {
        super(props);
        this.formInit();
        this.state = {
            studentForm: { ...this.studentForm }
        }
        this.handelChangeEvent = this.handelChangeEvent.bind(this);
    }

    componentDidMount() {
        scrollTop();
        this.activateSubscribers();
    }

    activateSubscribers() {
        //helps to make sync your form
        let formObservable = this.studentForm
            .valueChanges
            .subscribe(form => {
                this.setState({
                    ...this.state,
                    studentForm: form.studentForm
                });
            });
        this.unsubscribeObservables = [formObservable];

    }

    hobbyForm() {
        return new FormField('studentForm', 'hobby', {
            value: '',
            validations: [Validators.required()]
        });
    }

    formInit() {
        let hobbies = [this.hobbyForm()];

        let studentFields = {
            name: {
                value: '',
                validations: [Validators.required()]
            },
            hobbies: new FormArray('studentForm', 'hobbies', hobbies),
        };
        this.studentForm = new FormBuilder('studentForm', studentFields);
    }

    handelChangeEvent(event, index) {

        //index for hobbies array
        if (event.target.id === 'hobby') {
            this.studentForm.fields.hobbies.fields[index].setValue(event.target.value);
            this.studentForm.fields.hobbies.fields[index].updateValueAndValidity({ emitEvent: true });
        } else {
            this.studentForm.fields[event.target.id].setValue(event.target.value);
            this.studentForm.fields[event.target.id].updateValueAndValidity({ emitEvent: true });
        }
    }

    addHobby() {
        this.studentForm.fields.hobbies.push(this.hobbyForm(), { emitEvent: true });
    }

    removeHobby() {
        this.studentForm.fields.hobbies.remove({ emitEvent: true });
    }

    getHobbies(hobbies) {
        return hobbies.fields.map((hobby, key) => {
            return (
                <div key={key} className="row" form_array={hobby.formArrayId}>
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <label className="control-label setLabelPadd" htmlFor="email">{`${key + 1}.`}</label>
                        <input type="text" className="form-control mar10px" id="hobby"
                            onChange={(event) => this.handelChangeEvent(event, key)} value={hobby.value}
                            placeholder="Enter Hobby" />
                        {hobby.error &&
                            (hobby.touched && hobby.error.required)
                            ? <span className="error">Field is Required</span>
                            : <span></span>
                        }
                    </div>
                </div>
            );
        });
    }


    myStudentForm(name, hobbies, form) {
        return (
            <Forms id="studentForm">
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-10 col-sm-10 col-xs-10">

                            <label className="control-label setLabelPadd" htmlFor="email">Name:</label>
                            <input type="text" className="form-control mar10px" id="name"
                                onChange={this.handelChangeEvent} value={name.value}
                                placeholder="Enter Name" />
                            {name.error &&
                                (name.touched && name.error.required)
                                ? <span className="error">Field is Required</span>
                                : <span></span>
                            }
                        </div>
                    </div>


                    <div className="form-group">
                        <span><b>Hobbies -</b></span>
                        {this.getHobbies(hobbies)}
                    </div>

                    <div className="text-center">
                        <button type="button" className={form.valid ? 'green submitBtm' : 'red submitBtm'} >Submit</button>
                    </div>
                </div>
            </Forms>
        );
    }

    render() {
        let name = this.state.studentForm.fields.name;
        let form = this.state.studentForm;
        let hobbies = this.state.studentForm.fields.hobbies;

        return (
            <div style={{ margin: '20px 0px' }}>
                <h5> <Link to="/form-array"><b>Form Array</b></Link>{` > `}<Link to="/form-array/example"><b>Example</b></Link></h5>

                <p className="exampleContent" >
                    Below is the student form where we will add <span className="redHC">name</span> and <span className="redHC">hobbies </span>
                    of student. We know that student may have multiple hobbies, so we will use <span className="redHC">form array</span> for
                    hobbies because they are multiple for one student. We can also <span className="redHC">add() </span>
                    or <span className="redHC">remove()</span> the hobby by push and remove methods of form array class. You can get this code <a href="">here</a>.
                </p>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-1 col-sm-0 col-xs-0"></div>

                    <div className="col-md-5 col-sm-12 col-xs-12 loginDiv">
                        <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                            <button type="button" className="addBtn" onClick={this.addHobby.bind(this)}><b>+</b> Hobby</button>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                            <h5 ><b>Student</b></h5>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                            <button type="button" className="addBtn" onClick={this.removeHobby.bind(this)}><b>-</b> Hobby</button>
                        </div>
                        {this.myStudentForm(name, hobbies, form)}
                    </div>
                    <div className="col-md-1 col-sm-0 col-xs-0"></div>
                    <div className="col-md-5 col-sm-12 col-xs-12 result">
                        <div>
                            <h5>Name</h5>
                            <span> Touched: <b>{`${name.touched}`}</b>, Dirty: <b>{`${name.dirty}`}</b>,
                    Valid: <b>{`${name.valid}`}</b>, Errors: <b>{`${JSON.stringify(name.error)}`}</b></span>
                        </div>
                        <hr />

                        <div>
                            <h5>Hobbies Array Group</h5>
                            <span> Touched: <b>{`${hobbies.touched}`}</b>, Dirty: <b>{`${hobbies.dirty}`}</b>,
                    Valid: <b>{`${hobbies.valid}`}</b>, Errors: <b>{`${JSON.stringify(hobbies.error)}`}</b></span>
                        </div>
                        <hr />

                        {hobbies.fields.map((hobby, key) =>
                            <div key={key}>
                                <h5>Hobby ({key + 1})</h5>
                                <span> Touched: <b>{`${hobby.touched}`}</b>, Dirty: <b>{`${hobby.dirty}`}</b>,
                    Valid: <b>{`${hobby.valid}`}</b>, Errors: <b>{`${JSON.stringify(hobby.error)}`}</b></span>
                            </div>
                        )}
                        <hr />
                        <div>
                            <h5>Form</h5>
                            <span> Touched: <b>{`${form.touched}`}</b>, Dirty: <b>{`${form.dirty}`}</b>,
                    Valid: <b>{`${form.valid}`}</b>, Errors: <b>{`${JSON.stringify(form.error)}`}</b></span>
                        </div>
                    </div>
                </div>
                <Link to="/form-array"><b>Back</b></Link>

            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribeObservables.forEach(item => item.unsubscribe());
    }
}
