// API ACTIONS
import axios from "../axios";

// import in the pre-configured axios object
// create a function that returns another function
// the second function takes an argument that
// represents dispatch
export const getUserData = () => {
    console.log("getUserData");
    return (dispatch) => {
        axios
            .get("api/user", { withCredentials: true })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => console.log(error));
    };
};
