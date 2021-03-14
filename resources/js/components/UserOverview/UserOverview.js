import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { result } from "lodash";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: "100%",
        gap: theme.spacing(1),
        margin: theme.spacing(1),
    },
    card: {
        // width: 100,
        flex: "1 1 100px",
        height: "120px",
        // textAlign: center,
    },
    cardSmall: {
        height: 120,
    },
    cardLarge: {
        height: 160,
    },
    tbody: {
        overflowY: "scroll",
    },
    box: {
        display: "flex",
        flexDirection: "column",
    },
}));

let makeRows = (activityBreakdown) => {
    return activityBreakdown.map((activity, i) => {
        return (
            <tr key={activity.activityId}>
                <td>{activity.activityId}</td>
                <td>{activity.total}</td>
                <td>{activity.longest}</td>
            </tr>
        );
    });
};

export default function UserOverview({ user, handleLoad }) {
    const classes = useStyles();
    const { total, count, activityBreakdown } = user.data.overview;
    useEffect(() => {
        handleLoad(user.meta.id);
    }, []);
    return (
        <>
            <Grid container className={classes.root}>
                {/* Total */}
                <Grid item className={classes.card}>
                    <Card className={classes.cardSmall}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Distance Covered
                            </Typography>
                            <Typography display={"inline"} variant={"h3"}>
                                {total}
                            </Typography>
                            <Typography
                                color="textSecondary"
                                display={"inline"}
                            >
                                km
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* action count */}
                <Grid item className={classes.card}>
                    <Card className={classes.cardSmall}>
                        <CardContent>
                            <Typography variant="h3">{count}</Typography>
                            <Typography color="textSecondary">
                                Activities
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container className={classes.root}>
                {/* Total */}
                <Grid item className={classes.card}>
                    <Card className={classes.cardLarge}>
                        <CardContent>
                            <Typography variant="h3">{"7%"}</Typography>
                            <Typography color="textSecondary">
                                of team goal
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item className={classes.card}>
                    <Card className={classes.cardLarge}>
                        <CardContent>
                            <Typography color="textSecondary"></Typography>
                            <table className={"table"}>
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                            >
                                                total
                                            </Typography>
                                        </th>
                                        <th scope="col">
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                            >
                                                longest
                                            </Typography>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={classes.tbody}>
                                    {makeRows(activityBreakdown)}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </Grid>
                {/* action count */}
            </Grid>
        </>
    );
}
