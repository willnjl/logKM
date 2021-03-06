import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import UserActionFeed from "../UserActionFeed";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/icons/List";
import Equalizer from "@material-ui/icons/Equalizer";

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
}

export default function TabUser({ user, handleLoad }) {
    const { data, meta } = user;

    const [page, setPage] = useState(1);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        handleLoad(meta.id, page);
    }, [page]);

    const tabSelector = (tab) => {
        switch (tab) {
            case 0:
                return (
                    <UserActionFeed
                        handlePage={(increment) => setPage(page + increment)}
                        feed={data.feed}
                    />
                );
            case 1:
                return <TeamOverview />;
        }
    };

    return (
        <>
            {tabSelector(tab)}
            <Tabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                style={{ marginTop: "auto" }}
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
