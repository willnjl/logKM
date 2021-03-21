const errorHandling = (dispatch, error) => {
    console.log(error);
    if (error.response.status === 401) {
        dispatch({ type: "LOG_OUT" });
    }
};

export default errorHandling;
