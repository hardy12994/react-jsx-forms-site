import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Redirect, Switch } from "react-router-dom";

import { TopMainBar } from "./root/app-bar";
import LeftMainDrawer from "./root/left-drawer";
import Footer from "./root/footer";
import scrollTop from "../helpers/on-load";

import { IntroductionComponent } from "./introduction.component";
import { FormBuilderComponent } from "./form-builder.component";
import { ValidationsComponent } from "./validations.component";
import { FormGroupComponent } from "./form-groups.component";
import { FormArrayComponent } from "./form-array.component";
import { FormFieldComponent } from "./form-field.component";

import { FormBuilderExample } from './form-builder/example';
import { FormBuilderMethods } from './form-builder/methods';

import { FormGroupExample } from './form-group/example';
import { FormGroupMethods } from './form-group/methods';

import { FormArrayExample } from './form-array/example';
import { FormArrayMethods } from './form-array/methods';

import { FormFieldExample } from './form-field/example'
import { FormFieldMethods } from './form-field/methods';

import { RulesUsedComponent } from "./rules-used.component";
import { PersistentDrawerLeft } from "./root/dynamic-left-drawer";
import dummy from "./dummy";

import '../css/index.css';


const styles = {
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10
    }
};

class RootComponent extends Component {


    constructor(props) {
        super(props);
        scrollTop();
        // create a ref to store the textInput DOM element
        this.dynamicDrawer = React.createRef();
        this.dynamicNavBarHandler();
    }

    dynamicNavBarHandler() {
        document.onclick = () => this.dynamicDrawer.current.handleDrawerClose();
        window.onresize = () => this.windowResize();
    }

    windowResize() {
        if (window.outerWidth > 1440) {
            this.dynamicDrawer.current.handleDrawerClose();
        }
    }

    handleDrawer() {
        this.dynamicDrawer.current.handleDrawerOpen();
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                {/* <div className="fork">
                    <span>
                        FORK
                    </span>
                </div> */}
                <div id="appBar">
                    <TopMainBar {...this.props} handleDrawer={this.handleDrawer.bind(this)} />
                </div>

                <PersistentDrawerLeft ref={this.dynamicDrawer} {...this.props} />

                <div className="row">
                    <div className="col-md-2 col-sm-2 col-xs-2" id="sideBar">
                        <LeftMainDrawer {...this.props} />
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12 content-div" id="main-body">
                        <ChildRoutes {...this.props} />
                    </div>
                    <div className="col-md-2 col-sm-0 col-xs-0" id="sideBar">
                       {/* GoogleAddSenseComponent */}
                    </div>
                </div>
                <div className="row">

                    <div id="free-space-footer" className="col-md-2 col-sm-2 col-xs-2">
                        {/* <LeftMainDrawer {...this.props} /> */}
                    </div>
                    <div className="col-md-10 col-sm-12 col-xs-12 footer" id="footer">
                        <Footer {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}


function ChildRoutes({ location }) {
    return (
        <div>
            <Switch>
                <Route path='/introduction' component={IntroductionComponent} />
                <Route path='/dummy' component={dummy} />

                <Route exact path='/form-builder' component={FormBuilderComponent} />
                <Route path='/form-builder/example' component={FormBuilderExample} />
                <Route path='/form-builder/methods' component={FormBuilderMethods} />

                <Route path='/validations' component={ValidationsComponent} />

                <Route exact path='/form-groups' component={FormGroupComponent} />
                <Route path='/form-groups/example' component={FormGroupExample} />
                <Route path='/form-groups/methods' component={FormGroupMethods} />

                <Route exact path='/form-array' component={FormArrayComponent} />
                <Route path='/form-array/example' component={FormArrayExample} />
                <Route path='/form-array/methods' component={FormArrayMethods} />

                <Route exact path='/form-field' component={FormFieldComponent} />
                <Route path='/form-field/example' component={FormFieldExample} />
                <Route path='/form-field/methods' component={FormFieldMethods} />

                <Route path='/rules-used' component={RulesUsedComponent} />

                {/* {location.pathname === '/' && */}
                <Redirect from="/" to="/introduction" />
                {/* } */}
                {/* <Redirect to="/oops" /> */}
            </Switch>
        </div>
    );

}

RootComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

RootComponent.defaultProps = {
    barTitle: 'React JSX Forms'
};

export default withStyles(styles)(RootComponent);
