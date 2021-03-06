import React, { useEffect, useState } from "react";

export default function LoadTeam({
    children,
    teamLoaded,
    feedLoaded,
    teamToken,
    loadTeam,
    loadFeed,
}) {
    let loaded = teamLoaded && feedLoaded;
    useEffect(() => {
        if (!loaded) {
            loadFeed(teamToken);
            loadTeam(teamToken);
        }
    }, []);

    return !loaded ? <p>loading..</p> : children;
}
