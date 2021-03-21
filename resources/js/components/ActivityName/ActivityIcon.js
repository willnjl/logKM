import React from "react";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import DirectionsBike from "@material-ui/icons/DirectionsBike";
import Pool from "@material-ui/icons/Pool";

findActivityName = (terms, id) => {
    return terms.find((term) => term.id === id).name;
};

export default function ActivityIcon({ terms, activity }) {
    return findActivityName(terms.activities, activity);
}
