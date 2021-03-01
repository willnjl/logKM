import React from "react";

export default function TeamInfo({ team }) {
    console.log(team);
    const { goal, team_total } = team;
    console.log(team_total);
    return (
        <ul>
            <li>{team_total}</li>
            <li>{goal}</li>
            <li>{goal - team_total}</li>
        </ul>
    );
}
