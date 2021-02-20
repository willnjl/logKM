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

export default function Settings({ user, postData }) {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar);
    const [fileUpload, setFileUpload] = useState("");

    const handleFileChange = (e) => {
        if (!e.target.files.length) return;
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (e) => {
            let result = e.currentTarget.result;
            setAvatar(result);
            setFileUpload(file);
        };
    };

    const handleSubmit = (id, name, email, fileUpload) => {
        // let data = { name, email };
        let data = new FormData();
        data.append("email", email);
        data.append("name", name);
        if (fileUpload) {
            data.append("avatar", fileUpload);
        }
        postData(id, data);
    };
    const classes = useStyles();
    return (
        <PageWrap>
            <CardWrap avatar={avatar}>
                <form className={classes.form} method="PUT">
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

                    <input
                        type="file"
                        className={classes.input}
                        onChange={(e) => handleFileChange(e)}
                        accept="image/*"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={email === "" || email === ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(user.id, name, email, fileUpload);
                        }}
                    >
                        update
                    </Button>
                </form>
            </CardWrap>
        </PageWrap>
    );
}
