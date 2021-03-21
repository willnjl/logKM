import errorHandling from "./errorHandling";

export const getActivityTerms = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH.ACTIVITY_TERMS" });
        axios
            .get("/api/activities")
            .then((data) => {
                dispatch({
                    type: "SUCCESS.ACTIVITY_TERMS",
                    payload: data.data,
                });
            })
            .catch((error) => errorHandling(dispatch, error));
    };
};
