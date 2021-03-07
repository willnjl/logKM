const saveUserData = (state, { data }) => {
    const { actions } = data;

    return {
        ...state,
        data: {
            ...state.data,
            feed: {
                data: actions.data,
                current_page: actions.current_page,
                last_page: actions.last_page,
            },
        },
    };
};

export default saveUserData;
