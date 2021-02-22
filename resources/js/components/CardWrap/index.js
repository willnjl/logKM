import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import UserAvatar from "../UserAvatar";
const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        height: "600px",
        width: "100%",
        position: "relative",
    },
    large: {
        margin: theme.spacing(2),
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export default function CardWrap({ children, avatar }) {
    const classes = useStyles();
    return (
        <Card className={classes.paper}>
            <UserAvatar src={avatar} className={classes.large} />
            {children}
        </Card>
    );
}
