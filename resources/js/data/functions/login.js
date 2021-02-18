const login = (state, payload) => {
    return {
        ...state,
        loggedIn: true,
        ...payload,
    };
};

export default login;
