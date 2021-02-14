import React, { useEffect, useState } from "react";

import CardWrap from "../CardWrap";
import { makeStyles } from "@material-ui/core/styles";
import PageWrap from "../PageWrap";

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
export default function Dashboard({ user }) {
    const classes = useStyles();
    return (
        <PageWrap>
            <CardWrap
                avatar={
                    "https://th.bing.com/th/id/OIP.HvGf81fkBjIWfac5OySUJgHaE7?pid=ImgDet&rs=1"
                }
            >
                <h2>{user.name}</h2>
            </CardWrap>
        </PageWrap>
    );
}
