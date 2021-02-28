import React, { useEffect } from "react";

export default function Component({
    id,
    page,
    loaded,
    loadUserActions,
    children,
}) {
    useEffect(() => {
        loadUserActions(id, page);
        if (!loaded) {
        }
    }, [page, loaded]);

    return loaded ? children : <div>Loading</div>;
}
