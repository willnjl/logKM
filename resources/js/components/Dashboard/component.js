import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "../../axios";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
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
    large: {
        margin: theme.spacing(4),
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));
export default function Dashboard({ user }) {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Card className={classes.paper}>
                <Avatar
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                    className={classes.large}
                />
                <h2>{user.name}</h2>
            </Card>
        </Container>
    );
}
