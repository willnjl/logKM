// API ACTIONS
import axios from "../axios";
import history from "../history";

const handleError = (error) => {
    // if (error.response.status === 401) {
    //     dispatch({ type: "LOG_OUT" });
    // }
    console.log(error);
};

export const getUserData = () => {
    return (dispatch) => {
        axios
            .get("api/user", { withCredentials: true })
            .then(({ data }) => {
                dispatch({
                    type: "USER_DATA",
                    payload: data.data,
                });
            })
            .catch((error) => handleError(error));
    };
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
            .catch((error) => handleError(error));
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
                handleError(error);
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
            .catch((error) => handleError(error));
    };
};
export const update = (id, data) => {
    let url = `/api/user/${id}`;
    console.log(data.values());
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
            .catch((error) => handleError(error));
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
                history.push("/");
                dispatch({ type: "NEW_ACTION", payload: data });
            })
            .catch((error) => handleError(error));
    };
};
