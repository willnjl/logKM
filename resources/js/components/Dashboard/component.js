import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CardWrap from "../CardWrap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Loaded from "../LoadUser";
import LoadTeam from "../LoadTeam";
import UserActionFeed from "../UserActionFeed";
import TeamInfo from "../TeamInfo";

const useStyles = makeStyles((theme) => ({
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
    title: {
        marginBottom: theme.spacing(2),
    },
}));
export default function Dashboard({ user, log }) {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    return (
        <CardWrap avatar={user.avatar}>
            <h2 className={classes.title}>{user.name}</h2>
            <LoadTeam>
                <TeamInfo />
            </LoadTeam>
            {/* <LoadUser id={user.id} page={page} loaded={log.user.hasLoaded}>
                <UserActionFeed
                    userActions={log.user.actions}
                    handlePage={(increment) => setPage(page + increment)}
                />
            </LoadUser> */}
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
