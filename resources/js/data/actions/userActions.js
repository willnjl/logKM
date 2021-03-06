export const getUserData = () => {
    return (dispatch) => {
        dispatch({
            type: "FETCH.USER_DATA",
        });
        axios
            .get("api/user", { withCredentials: true })
            .then(({ data }) => {
                dispatch({
                    type: "SUCCESS.USER_DATA",
                    payload: data.data,
                });
            })
            .catch((error) => console.log(error));
    };
};
export const getUserFeed = (id, page) => {
    return (dispatch) => {
        dispatch({
            type: "FETCH.USER_FEED",
        });
        axios
            .get(`api/actions/${id}`, {
                withCredentials: true,
                params: {
                    page: page,
                },
            })
            .then(({ data }) => {
                dispatch({ type: "SUCCESS.USER_FEED", payload: data });
            })
            .catch((error) => console.log(error));
    };
};
