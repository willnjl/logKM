import React from "react";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import DirectionsBike from "@material-ui/icons/DirectionsBike";
import Pool from "@material-ui/icons/Pool";

let iconSelector = (activity) => {
    switch (activity.name) {
        case "swimming":
            return <Pool />;
        case "running":
            return <DirectionsRun />;
        case "walking":
            return <DirectionsWalk />;
        case "cycling":
            return <DirectionsBike />;
        default:
            return <DirectionsRun />;
    }
};
let findActivity = (terms, id) => {
    return terms.find((term) => term.id === id);
};

export default function ActivityIcon({ terms, activity }) {
    console.log({ terms, activity });
    return iconSelector(findActivity(terms.activities, activity));
}
