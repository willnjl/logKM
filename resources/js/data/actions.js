// API ACTIONS
import axios from "../axios";

// import in the pre-configured axios object
// create a function that returns another function
// the second function takes an argument that
// represents dispatch
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
                console.log(data);
            })
            .catch((error) => console.log(error));
    };
};
