const userData = (state, payload) => {
    return {
        ...state,
        loggedIn: true,
        ...payload,
    };
};

export default userData;
