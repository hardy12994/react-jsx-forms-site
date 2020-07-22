import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import '../../css/index.css';
import git from '../../images/git.png';
import npm from '../../images/npm.png';
import fixSideNavOnScroll from '../../helpers/side-nav';
const drawerWidth = 240;

const navList = [
    {
        to: 'introduction',
        viewName: 'Introduction'
    }, {
        to: 'form-builder',
        viewName: 'Form Builder'
    }, {
        to: 'validations',
        viewName: 'Validations'
    }, {
        to: 'form-groups',
        viewName: 'Form Groups'
    }, {
        to: 'form-array',
        viewName: 'Form Array'
    }, {
        to: 'form-field',
        viewName: 'Form Field'
    }, {
        to: 'rules-used',
        viewName: 'Rules Used'
    }, {
        to: 'git',
        viewName: 'GIT HUB'
    }, {
        to: 'npm',
        viewName: 'NPM'
    }];

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    }
    // toolbar: theme.mixins.toolbar
});



export function NavLinks({ history, location }) {

    return navList.map(item => {
        return (
            <div key={item.viewName} className={location.pathname.includes(item.to) ? 'sideListItems sidePurpleBar' : 'sideListItems'} >
                <ListItem button onClick={() => handelNav(item.to, history)}>
                    {(item.to !== 'git' && item.to !== 'npm') &&
                        <h5 className="sideHeadings"> {item.viewName}</h5>
                    }
                    {(item.to === 'git') &&
                        <img src={git} style={{ marginLeft: '-5px' }} alt={item.to + '_logo'} height="42" width="100" />
                    }
                    {(item.to === 'npm') &&
                        <img src={npm} style={{ marginLeft: '2px' }} alt={item.to + '_logo'} height="42" width="60" />
                    }
                </ListItem>
                {(item.to !== 'npm') &&
                    <Divider />
                }
            </div >
        )
    })
};


function handelNav(to, history) {
    if (to === 'npm') {
        return window.open('https://www.npmjs.com/package/react-jsx-forms');
    }
    if (to === 'git') {
        return window.open('https://github.com/hardy12994/react-jsx-forms');
    }
    history.push(`/${to}`);
}


function LeftMainDrawer(props) {

    const { classes, ...otherProps } = props;
    document.addEventListener("scroll", fixSideNavOnScroll);

    if (classes.menuButton) delete classes.menuButton;
    return (
        <div id="sideNavBar">
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <NavLinks {...otherProps} />
                </List>
            </Drawer>
        </div>
    );
}


LeftMainDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMainDrawer);