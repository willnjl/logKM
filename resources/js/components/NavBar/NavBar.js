import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
    },
    paper: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

export default function MenuListComposition({ user, logout }) {
    const { loggedIn } = user;
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleToggle = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = () => {
        handleClick();
        if (loggedIn) {
            logout();
        }
    };

    return (
        <div className={classes.root}>
            <IconButton
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MoreVertIcon />
            </IconButton>
            <Paper className={classes.paper}>
                <Menu
                    style={{ flexDirection: "row" }}
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/dashboard">Dashboard</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/settings">Settings</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/"> {loggedIn ? "Logout" : "Sign In"}</Link>
                    </MenuItem>
                </Menu>
            </Paper>
        </div>
    );
}
