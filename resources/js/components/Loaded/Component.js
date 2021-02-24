import React, { useEffect, useState } from "react";

export default function Component({ id, loaded, handleLoad, children }) {
    useEffect(() => {
        if (!loaded) {
            handleLoad(id);
        }
    }, []);

    return loaded ? children : <div>Loading</div>;
}
