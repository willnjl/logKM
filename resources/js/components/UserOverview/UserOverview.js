import React, { useEffect } from "react";

export default function UserOverview({ user, handleLoad }) {
    useEffect(() => {
        handleLoad(user.meta.id);
    }, []);

    return (
        <div>
            <h1>user overview</h1>
        </div>
    );
}
