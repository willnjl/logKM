// API ACTIONS
import axios from "../axios";

export const getUserData = () => {
    return (dispatch) => {
        axios
            .get("api/user", { withCredentials: true })
            .then(({ data }) => {
                let { email, id, name } = data;
                dispatch({ type: "LOG_IN", payload: { email, id, name } });
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
            .catch((error) => console.log(error));
    };
};
export const logout = () => {
    return (dispatch) => {
        axios
            .post("/logout", { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "LOG_OUT" });
            })
            .catch((error) => console.log(error));
    };
};
