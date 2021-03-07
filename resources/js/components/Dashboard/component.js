import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CardWrap from "../CardWrap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabUser from "../TabUser";
import TeamOverview from "../TeamOverview";
// import LoadUser from "../LoadUser";
// import LoadTeam from "../LoadTeam";
// import UserActionFeed from "../UserActionFeed";
// import TeamInfo from "../TeamInfo";

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
        marginBottom: theme.spacing(1),
    },
    spinner: {
        marginTop: theme.spacing(10),
    },
    tabs: {
        marginBottom: theme.spacing(2),
    },
}));

const pageSelector = (page) => {
    switch (page) {
        case 0:
            return <TabUser />;
            break;
        case 1:
            return <TeamOverview />;
        default:
            break;
    }
};
export default function Dashboard({ user }) {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const { meta, data } = user;

    if (meta.isFetching) {
        return (
            <CardWrap>
                <CircularProgress
                    className={classes.spinner}
                    size={"1.25rem"}
                />
            </CardWrap>
        );
    }
    return (
        <CardWrap avatar={meta.avatar}>
            <h2 className={classes.title}>{meta.name}</h2>
            <Tabs
                variant={"fullWidth"}
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                className={classes.tabs}
            >
                <Tab label={meta.name}></Tab>
                <Tab label={"team"}></Tab>
            </Tabs>
            {pageSelector(tab)}
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
