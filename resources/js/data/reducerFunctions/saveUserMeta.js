const saveUserMeta = (state, payload) => {
    console.log(payload);
    return {
        ...state,
        loggedIn: true,
        meta: {
            ...payload,
            isFetching: false,
        },
    };
};

export default saveUserMeta;
