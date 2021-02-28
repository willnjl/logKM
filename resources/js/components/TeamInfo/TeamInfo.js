import React, { useState, useEffect } from "react";

export default function TeamInfo({ team }) {
    console.log(team);
    const { total, mates, team_total } = team;
    console.log(team_total);
    return (
        <ul>
            <li>{team_total}</li>
            {/* <li>{}</li> */}
            {/* <li>{total}</li> */}
        </ul>
    );
}
