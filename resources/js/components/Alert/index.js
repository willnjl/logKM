import React from "react";
import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
    root: {
        height: theme.spacing(4),
        border: "1px solid red",
    },
}));

export default function Alert({ error }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>{error}</p>
        </div>
    );
}
