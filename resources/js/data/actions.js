// API ACTIONS
import axios from "../axios";
import history from "../history";

const handleError = (dispatch, error) => {
    console.log(error);
    if (error.response.status === 401) {
        dispatch({ type: "LOG_OUT" });
    }
};

export const getUserActions = (id, page) => {
    return (dispatch) => {
        axios
            .get(`api/actions/${id}`, {
                withCredentials: true,
                params: {
                    page: page,
                },
            })
            .then(({ data }) => {
                dispatch({ type: "USER_ACTIONS", payload: data });
            })
            .catch((error) => console.log(error));
    };
};
export const getActionData = () => {
    return (dispatch) => {
        axios
            .get("api/actions", { withCredentials: true })
            .then(({ data }) => {
                dispatch({
                    type: "ALL_ACTIONS",
                    payload: { actions: data, isLoaded: true },
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
export const logout = () => {
    return (dispatch) => {
        axios
            .post("/logout", { withCredentials: true })
            .then(() => {
                console.log("goodbye");
                dispatch({ type: "LOG_OUT" });
            })
            .catch((error) => console.log(error));
    };
};
export const update = (id, data) => {
    let url = `/api/user/${id}`;

    return (dispatch) => {
        axios
            .post(url, data, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({ data }) => {
                dispatch({ type: "UPDATE_USER_DATA", payload: data });
                history.push("/dashboard");
            })
            .catch((error) => console.log(error));
    };
};
export const postAction = (id, formData) => {
    let url = `/api/actions`;

    let data = {
        id,
        activity_id: 2,
        distanceKM: +formData.distance,
        date_completed: formData.date,
    };
    return (dispatch) => {
        axios
            .post(url, data, { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "NEW_ACTION", payload: data });
            })
            .catch((error) => console.log(error));
    };
};
export const loadTeam = (token) => {
    let url = `/api/team/${token}`;
    return (dispatch) => {
        axios
            .get(url, { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "TEAM_DATA", payload: data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
export const loadFeed = (token) => {
    let url = `/api/team/feed/${token}`;
    return (dispatch) => {
        axios
            .get(url, { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "TEAM_FEED", payload: data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
