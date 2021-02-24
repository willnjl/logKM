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
                let { email, id, name } = data;
                dispatch({ type: "LOG_IN", payload: { email, id, name } });
            })
            .catch((error) => handleError(error));
    };
};
export const getUserStats = (id) => {
    return (dispatch) => {
        axios
            .get(`api/actions/${id}`, { withCredentials: true })
            .then(({ data }) => {
                let { actions, total } = data;
                dispatch({ type: "USER_ACTIONS", payload: { actions, total } });
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
                console.log({ data });
                dispatch({ type: "UPDATE", payload: data.data });
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
                dispatch({ type: "NEW_ACTION", payload: data.data });
            })
            .catch((error) => handleError(error));
    };
};
