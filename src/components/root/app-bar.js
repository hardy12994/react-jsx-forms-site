import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../css/index.css';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { NavLinks } from "./left-drawer";
import Drawer from '@material-ui/core/Drawer';



const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        // display: 'none'
    },
};

export function TopMainBar(props) {

    const { barTitle } = props;
    const { classes } = props;
    const { handleDrawer } = props;

    return (
        <AppBar position="static">
            <Toolbar >
                <IconButton id="menuIcon" onClick={handleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                    <span className="barTitle">
                        <b>
                            <Link style={{
                                color: 'white', textDecoration: 'none'
                            }} to='/introduction'>{barTitle}
                            </Link>
                        </b>
                    </span>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}


TopMainBar.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(TopMainBar);