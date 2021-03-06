import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import UserActionFeed from "../UserActionFeed";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/icons/List";
import Equalizer from "@material-ui/icons/Equalizer";

const useStyles = makeStyles((theme) => ({
    indicator: {
        backgroundColor: "#3f51b5",
    },
}));

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
}

export default function TabUser({ user, handleLoad }) {
    const { data, meta } = user;
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        handleLoad(meta.id, page);
    }, [page]);

    return (
        <>
            <UserActionFeed
                handlePage={(increment) => setPage(page + increment)}
                feed={data.feed}
            />

            <Tabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                style={{ marginTop: "auto" }}
                // classes={{
                //     indicator: classes.indicator,
                // }}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
            >
                <Tab icon={<List />} {...a11yProps(0)} />
                <Tab icon={<Equalizer />} {...a11yProps(1)} />
            </Tabs>
        </>
    );
}
