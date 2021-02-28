import React from "react";
import Date from "@material-ui/icons/Event";
import SpaceBar from "@material-ui/icons/SpaceBar";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import DirectionsBike from "@material-ui/icons/DirectionsBike";
import Pool from "@material-ui/icons/Pool";

let spanWrap = (icon) => {
    return <span className={"material-icons"}>{icon}</span>;
};

const columns = [
    { field: "date", headerName: spanWrap(<Date />), width: 130 },
    // { field: "name", headerName: "Name", width: 130 },
    {
        field: "distanceKM",
        type: "number",
        headerName: spanWrap(<SpaceBar />),
        width: 90,
    },
    {
        field: "activity",
        headerName: null,
        width: 90,
    },
];

const makeCols = (cols) => {
    return cols.map((col, i) => {
        return <th key={i}>{col.headerName}</th>;
    });
};

const makeRows = (data) => {
    let icons = [
        <DirectionsWalk />,
        <DirectionsRun />,
        <DirectionsBike />,
        <Pool />,
    ];
    return data.map((row, i) => {
        return (
            <tr key={i}>
                <td>{row.date_completed}</td>
                <td>{row.distance}</td>
                <td>{icons[row.activity_id]}</td>
            </tr>
        );
    });
};

export default function UserActionFeed({ data }) {
    return (
        <table className={"table"}>
            <thead>
                <tr>
                    {makeCols(columns)}
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>{makeRows(data)}</tbody>
        </table>
    );
}
