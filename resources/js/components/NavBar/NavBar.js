import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

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
    const handleClick = () => {
        if (loggedIn) {
            logout();
        }
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>
                        <Link to="/settings">Settings</Link>
                    </MenuItem>
                    <MenuItem onClick={() => handleClick()}>
                        <Link to="/"> {loggedIn ? "Logout" : "Sign In"}</Link>
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}
