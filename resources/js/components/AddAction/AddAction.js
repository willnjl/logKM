import React, { useState } from "react";
import { FormControl, makeStyles } from "@material-ui/core";
import dayjs from "dayjs";
import InputAdornment from "@material-ui/core/InputAdornment";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CardWrap from "../CardWrap";
import PageWrap from "../PageWrap";
// import { set } from "lodash";

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        display: "flex",
        height: "100%",
        justifyContent: "space-evenly",
        flexDirection: "column",
    },

    col: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(2),
    },
    row: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(2),
        justifyContent: "space-between",
    },
    half: {
        flex: 1,
        margin: "0 10px",
    },

    submit: {
        margin: theme.spacing(3, "auto"),
    },
    quickDate: {
        padding: theme.spacing(0),
    },
}));

export default function AddAction({ user, handleSubmit }) {
    const classes = useStyles();
    const dateFormat = "YYYY-MM-DD";
    const [values, setValues] = useState({
        distance: 0,
        date: dayjs().format(dateFormat),
        activity_id: 0,
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

    const handleQuickDate = (values, selected) => {
        if (selected === "yesterday") {
            let yesterday = dayjs().subtract(1, "day").format(dateFormat);
            setValues({
                ...values,
                date: yesterday,
            });
        } else {
            setValues({
                ...values,
                date: dayjs().format(dateFormat),
            });
        }
    };
    return (
        <form className={classes.form}>
            <div className={classes.row}>
                <TextField
                    label="Distance"
                    className={classes.half}
                    type={"number"}
                    step={"0.5"}
                    value={values.distance}
                    onChange={(e) => handleChange("distance", e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">Km</InputAdornment>
                        ),
                    }}
                />
                <FormControl className={classes.half}>
                    <InputLabel id="select-activity-label">Activity</InputLabel>
                    <Select
                        labelId="select-activity-label"
                        label="Activity"
                        id="demo-simple-select"
                        value={values.activityId}
                        onChange={(e) =>
                            handleChange("activity_id", e.target.value)
                        }
                    >
                        {activites}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.row}>
                <TextField
                    id="date"
                    label="Date Completed"
                    type="date"
                    className={classes.textField}
                    value={values.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className={classes.col}>
                    <Button
                        className={classes.quickDate}
                        onClick={() => handleQuickDate(values, "today")}
                    >
                        Today
                    </Button>
                    <Button
                        className={classes.quickDate}
                        onClick={() => handleQuickDate(values, "yesterday")}
                    >
                        Yesterday
                    </Button>
                </div>
            </div>
            <div className={classes.row}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                    startIcon={<SaveIcon />}
                    onClick={() => handleSubmit(user.id, values)}
                >
                    Save
                </Button>
            </div>
        </form>
    );
}
