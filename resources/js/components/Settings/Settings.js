import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PageWrap from "../PageWrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardWrap from "../CardWrap";

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    input: {
        marginBottom: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Settings({ user }) {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar);
    const classes = useStyles();
    return (
        <PageWrap>
            <CardWrap
                avatar={
                    "https://th.bing.com/th/id/OIP.HvGf81fkBjIWfac5OySUJgHaE7?pid=ImgDet&rs=1"
                }
            >
                <form className={classes.form} encType={"multipart/form-data"}>
                    <TextField
                        label="name"
                        className={classes.input}
                        name={"name"}
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    <TextField
                        label="email"
                        name={"name"}
                        value={email}
                        className={classes.input}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />

                    <input type="file" className={classes.input} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={email === "" || email === ""}
                        onClick={(e) => handleSubmit(e, email, avatar)}
                    >
                        update
                    </Button>
                </form>
            </CardWrap>
        </PageWrap>
    );
}
