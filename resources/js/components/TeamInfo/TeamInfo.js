import React, { useState, useEffect } from "react";

export default function TeamInfo({ team }) {
    const { total, mates, goal } = team;

    return (
        <ul>
            <li>{goal}</li>
            <li>{total}</li>
            {/* <li>{total}</li> */}
        </ul>
    );
}
