const saveUserData = (state, { data }) => {
    const { total, actions } = data;

    return {
        ...state,
        data: {
            ...data,
            total,
            feed: {
                data: actions.data,
                current_page: actions.current_page,
                last_page: actions.last_page,
            },
        },
    };
};

export default saveUserData;
