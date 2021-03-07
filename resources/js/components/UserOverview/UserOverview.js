import React, { useEffect } from "react";

export default function UserOverview({ user, handleLoad }) {
    useEffect(() => {
        handleLoad(user.meta.id);
    }, []);

    return <div></div>;
}
