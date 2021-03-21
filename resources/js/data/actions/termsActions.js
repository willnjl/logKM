import errorHandling from "./errorHandling";

export const getActivityTerms = (data) => {
    return (dispatch) => {
        dispatch({ type: "FETCHING.ACTIVITY_TERMS" });
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
