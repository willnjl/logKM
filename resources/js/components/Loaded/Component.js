import React, { useEffect, useState } from "react";

export default function Component({ loaded, handleLoad }) {
    useEffect(() => {
        handleLoad();
    }, []);

    return loaded ? children : <div>Loading</div>;
}
