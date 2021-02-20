import React, { useState } from "react";
import { FormControl, makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import MomentUtils from "@date-io/moment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CardWrap from "../CardWrap";
import PageWrap from "../PageWrap";

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
    },

    row: {
        display: "flex",
        marginBottom: theme.spacing(5),
    },
    half: {
        flex: 1,
        margin: "0 10px",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    input: {
        marginBottom: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function AddAction() {
    const classes = useStyles();

    const [values, setValues] = useState({
        distance: 0,
        date: new Date().toISOString().slice(0, 10),
        activity: 0,
        activityId: 0,
    });

    const activites = ["running", "walking"].map((activity, i) => {
        return (
            <MenuItem key={i} value={i}>
                {activity}
            </MenuItem>
        );
    });

    const handleChange = (prop, value) => {
        console.log(value);
        setValues({ ...values, [prop]: value });
    };
    return (
        <PageWrap>
            <CardWrap>
                <form className={classes.form}>
                    <div className={classes.row}>
                        <TextField
                            label="Distance"
                            className={classes.half}
                            type={"number"}
                            step={"0.5"}
                            value={values.distance}
                            onChange={(e) =>
                                handleChange("distance", e.target.value)
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        Km
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormControl className={classes.half}>
                            <InputLabel id="select-activity-label">
                                Activity
                            </InputLabel>
                            <Select
                                labelId="select-activity-label"
                                label="Activity"
                                id="demo-simple-select"
                                value={values.activityId}
                                onChange={(e) =>
                                    handleChange("activityId", e.target.value)
                                }
                            >
                                {activites}
                            </Select>
                        </FormControl>
                    </div>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        value={values.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </CardWrap>
        </PageWrap>
    );
}
