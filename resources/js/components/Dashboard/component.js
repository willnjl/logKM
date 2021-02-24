import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CardWrap from "../CardWrap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Loaded from "../Loaded";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    fab: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: theme.spacing(2),
    },
}));
export default function Dashboard({ user, log }) {
    const classes = useStyles();

    return (
        <CardWrap avatar={user.avatar}>
            <h2>{user.name}</h2>
            <Loaded user={user.id}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Loaded>
            <Link to={"add"}>
                <Fab
                    size="medium"
                    color="secondary"
                    aria-label="add"
                    className={classes.fab}
                >
                    <AddIcon />
                </Fab>
            </Link>
        </CardWrap>
    );
}
