import React, { useEffect } from "react";

export default function LoadTeam({ hasLoaded, teamToken, handleLoad }) {
    useEffect(() => {
        if (!hasLoaded) {
            handleLoad(teamToken);
        }
    }, []);

    return <div></div>;
}
