import React, { useEffect, useState } from "react";

export default function Component({ id, page, loaded, handleLoad, children }) {
    console.log(page);
    useEffect(() => {
        handleLoad(id, page);
        if (!loaded) {
        }
    }, [page, loaded]);

    return loaded ? children : <div>Loading</div>;
}
