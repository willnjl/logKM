const addUserActions = (state, { data }) => {
    const { total, actions } = data;
    console.log(actions);
    return {
        ...state,
        user: {
            total,
            actions: {
                data: actions.data,
                current_page: actions.current_page,
                last_page: actions.last_page,
            },
            hasLoaded: true,
        },
    };
};

export default addUserActions;
