import React, { useState, useEffect } from "react";
import history from "../../history";
import axios from "../../axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
}));

export default function SignIn({ getUserData }) {
    const classes = useStyles();
    let [email, setEmail] = useState("harry@banana.com");
    let [password, setPassword] = useState("password");

    useEffect(() => {
        axios.get("/sanctum/csrf-cookie").catch((error) => console.log(error));
    }, []);

    let handleSubmit = (e, email, password) => {
        e.preventDefault();
        axios
            .post("/login", {
                email,
                password,
            })
            .then((response) => {
                getUserData();
                history.push("/dashboard");
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Card className={classes.paper}>
                ∂
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <input type="file" />
                    </form>
                </div>
            </Card>
        </Container>
    );
}
