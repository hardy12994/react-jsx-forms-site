import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FormBuilder, FormGroup, Validators, Forms } from 'react-jsx-forms';
import scrollTop from "../../helpers/on-load";


export class FormGroupExample extends Component {

    constructor(props) {
        super(props);
        this.formInit(props);
        this.state = {
            orderForm: { ...this.orderForm }
        };
        this.onChange = this.onChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
    }

    componentDidMount() {
        scrollTop();
        this.activateSubscribers();
    }

    activateSubscribers() {

        let formObservable = this.orderForm
            .valueChanges
            .subscribe(form => {
                this.setState({
                    ...this.state,
                    orderForm: form.orderForm
                });
            });
        this.unsubscribeObservables = [formObservable];

    }

    addressForm() {
        var addressFields = {
            city: {
                value: '',
                validations: [Validators.required()]
            },
            state: {
                value: '',
                validations: [Validators.required()]
            }
        };
        return new FormGroup('orderForm', 'address', addressFields);
    }

    formInit() {

        var orderFields = {
            name: {
                value: '',
                validations: [Validators.required()]
            },
            quantity: {
                value: '0'
            },
            address: this.addressForm()
        };

        this.orderForm = new FormBuilder('orderForm', orderFields);
    }

    onChange(event) {
        let newValue;
        let targetId;

        if (event.target.type === 'text' || event.target.type === 'select-one') {
            targetId = event.target.id;
            newValue = event.target.value;
        }

        this.orderForm.fields[targetId].setValue(newValue);
        this.orderForm.fields[targetId].updateValueAndValidity({ emitEvent: true });
    }

    onAddressChange(event) {
        let newValue;
        let targetId;

        if (event.target.type === 'text' || event.target.type === 'select-one') {
            targetId = event.target.id;
            newValue = event.target.value;
        }

        this.orderForm.fields.address.fields[targetId].setValue(newValue);
        this.orderForm.fields.address.fields[targetId].updateValueAndValidity({ emitEvent: true });
    }


    myOrderForm(orderForm) {
        return (
            <Forms id="orderForm">
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="status">Name:</label>
                        <input type="text" className="form-control"
                            id="name" name="name" placeholder="Enter Name"
                            value={orderForm.value.name}
                            onChange={this.onChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="quantity">Order Quantity:</label>
                        <input type="text" className="form-control"
                            id="quantity" name="quantity" placeholder="Enter Quantity"
                            value={orderForm.value.quantity}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{ marginBottom: '20px' }}>
                        <h5 className="text-center"><b>Order Address ( From Group ) </b></h5>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-6 form-group">
                        <label htmlFor="state">City:</label>
                        <input type="text" className="form-control"
                            id="city" name="city" placeholder="Enter City"
                            value={orderForm.value.address.city}
                            onChange={this.onAddressChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" className="form-control"
                            id="state" name="state" placeholder="Enter State"
                            value={orderForm.value.address.state}
                            onChange={this.onAddressChange} />
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className={orderForm.valid ? 'green submitBtm' : 'red submitBtm'} >Submit</button>
                </div>

            </Forms>
        );
    }

    render() {
        let orderForm = this.state.orderForm;
        let addressForm = orderForm.fields['address'];
        let name = orderForm.fields['name'];
        let quantity = orderForm.fields['quantity'];
        let city = addressForm.fields['city'];
        let state = addressForm.fields['state'];

        return (

            <div style={{ margin: '20px 0px' }}>
                <h5> <Link to="/form-groups"><b>Form Group</b></Link>{` > `}<Link to="/form-groups/example"><b>Example</b></Link></h5>

                <p className="exampleContent">
                    Here, we are going to make the form which will use form group. So if i want to make order, that order form contain
                    <span className="redHC"> name</span>, <span className="redHC">quantity</span> and ofcourse <span className="redHC">address</span> where we want to deliver that order.
                    Now address is different part of order and because it contain address data which is
                    <span className="redHC"> city</span> and <span className="redHC">state</span>. Here we use form group to make address
                    group in the main form. Now keep in mind that city and state are part of address group and address group is part of main form.
                    You can get this code <a href="">here</a>.
                </p>

                <p className="exampleContent">
                    In this case city and state fields are having validations so, address group validity will get effected fields in it. This same
                    thing will be applicable to main form.
                </p>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-1 col-sm-0 col-xs-0">

                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 orderDiv">
                        <h5 className="text-center"><b>Order Details</b></h5>
                        {this.myOrderForm(orderForm)}
                    </div>
                    <div className="col-md-1 col-sm-0 col-xs-0">

                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 result">
                        <div>
                            <h5><b>Name</b></h5>
                            <span> Touched: <b>{`${name.touched}`}</b>, Dirty: <b>{`${name.dirty}`}</b>,
                    Valid: <b>{`${name.valid}`}</b>, Errors: <b>{`${JSON.stringify(name.error)}`}</b></span>
                        </div>
                        <hr />
                        <div>
                            <h5><b>Quantity</b></h5>
                            <span> Touched: <b>{`${quantity.touched}`}</b>, Dirty: <b>{`${quantity.dirty}`}</b>,
                    Valid: <b>{`${quantity.valid}`}</b>, Errors: <b>{`${JSON.stringify(quantity.error)}`}</b></span>
                        </div>
                        <hr />
                        <div>
                            <h5><b>Address Group</b></h5>
                            <span> Touched: <b>{`${addressForm.touched}`}</b>, Dirty: <b>{`${addressForm.dirty}`}</b>,
                    Valid: <b>{`${addressForm.valid}`}</b>, Errors: <b>{`${JSON.stringify(addressForm.error)}`}</b></span>
                        </div>
                        <hr />
                        <div>
                            <h5><b>City</b></h5>
                            <span> Touched: <b>{`${city.touched}`}</b>, Dirty: <b>{`${city.dirty}`}</b>,
                    Valid: <b>{`${city.valid}`}</b>, Errors: <b>{`${JSON.stringify(city.error)}`}</b></span>
                        </div>
                        <hr />
                        <div>
                            <h5><b>State</b></h5>
                            <span> Touched: <b>{`${state.touched}`}</b>, Dirty: <b>{`${state.dirty}`}</b>,
                    Valid: <b>{`${state.valid}`}</b>, Errors: <b>{`${JSON.stringify(state.error)}`}</b></span>
                        </div>
                        <hr />
                        <div>
                            <h5><b>Form</b></h5>
                            <span> Touched: <b>{`${orderForm.touched}`}</b>, Dirty: <b>{`${orderForm.dirty}`}</b>,
                    Valid: <b>{`${orderForm.valid}`}</b>, Errors: <b>{`${JSON.stringify(orderForm.error)}`}</b></span>
                        </div>
                    </div>
                </div>
                <Link to="/form-groups"><b>Back</b></Link>
            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribeObservables.forEach(item => item.unsubscribe());
    }
}