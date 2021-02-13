const login = (payload) => {
    return {
        loggedIn: true,
        ...payload,
    };
};

export default login;
