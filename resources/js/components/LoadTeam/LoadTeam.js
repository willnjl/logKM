import React, { useEffect } from "react";

export default function LoadTeam({
    children,
    hasLoaded,
    teamToken,
    handleLoad,
}) {
    useEffect(() => {
        if (!hasLoaded) {
            handleLoad(teamToken);
        }
    }, []);

    return !hasLoaded ? <p>loading..</p> : children;
}
