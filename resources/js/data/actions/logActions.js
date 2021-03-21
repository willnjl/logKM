export const getActivityTerms = (data) => {
    console.log({ data });
    return (dispatch) => {
        dispatch({ type: "SUCCESS.TERMS", payload: data.data });
    };
};
