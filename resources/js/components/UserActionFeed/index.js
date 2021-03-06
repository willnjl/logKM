import React from "react";
import Date from "@material-ui/icons/Event";
import SpaceBar from "@material-ui/icons/SpaceBar";
// import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
    const empty = [
        { distance: null, date_completed: null, activity_id: null },
        { distance: null, date_completed: null, activity_id: null },
        { distance: null, date_completed: null, activity_id: null },
    ];
    if (!data) {
        data = empty;
    }
    return data.map((row, i) => {
        return (
            <tr key={i}>
                <td>{row.date_completed}</td>
                <td>{row.distance} km</td>
                <td>{icons[row.activity_id]}</td>
            </tr>
        );
    });
};

export default function UserActionFeed({ feed, handlePage, isFetching }) {
    const { data, current_page, last_page } = feed;
    return (
        <>
            <table className={"table"}>
                <thead>
                    <tr>
                        {makeCols(columns)}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>{makeRows(data)}</tbody>
                <tfoot>
                    <tr
                        style={{
                            textAlign: "right",
                        }}
                    >
                        <td colSpan={3}>
                            <span>
                                Page {current_page} of {last_page}
                            </span>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
            >
                <Button
                    disabled={current_page === 1}
                    onClick={() => handlePage(-1)}
                >
                    Previous
                </Button>
                <Button
                    disabled={current_page === last_page}
                    onClick={() => handlePage(1)}
                >
                    Next
                </Button>
            </ButtonGroup>
        </>
    );
}
