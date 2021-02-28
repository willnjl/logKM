import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: theme.spacing(2),
    },
}));

export default function ClosePage() {
    const classes = useStyles();
    return (
        <Link to={"/dashboard"}>
            <Fab
                size="medium"
                color="secondary"
                aria-label="dashboard"
                className={classes.fab}
            >
                <CloseIcon />
            </Fab>
        </Link>
    );
}
