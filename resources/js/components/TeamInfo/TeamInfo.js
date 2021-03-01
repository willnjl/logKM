import React from "react";

export default function TeamInfo({ team }) {
    const { goal, team_total } = team;
    return (
        <ul>
            <li>{team_total}</li>
            <li>{goal}</li>
            <li>{goal - team_total}</li>
        </ul>
    );
}
