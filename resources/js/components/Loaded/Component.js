import React, { useEffect, useState } from "react";

export default function Component({ loaded, handleLoad, children }) {
    useEffect(() => {
        if (!loaded) {
            handleLoad();
        }
    }, []);

    return loaded ? children : <div>Loading</div>;
}
