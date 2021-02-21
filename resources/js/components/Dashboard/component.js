import React, { useEffect, useState } from "react";
import AddAction from "../AddAction/";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import CardWrap from "../CardWrap";
import { makeStyles } from "@material-ui/core/styles";
import PageWrap from "../PageWrap";

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
export default function Dashboard({ user }) {
    const classes = useStyles();
    const [formOpen, setFormOpen] = useState(false);

    return (
        <PageWrap>
            <CardWrap avatar={user.avatar}>
                {formOpen ? <AddAction /> : <h2>{user.name}</h2>}
                <Fab
                    size="medium"
                    color="secondary"
                    aria-label="add"
                    className={classes.fab}
                    onClick={() => setFormOpen(!formOpen)}
                >
                    {!formOpen ? <AddIcon /> : <CloseIcon />}
                </Fab>
            </CardWrap>
        </PageWrap>
    );
}
