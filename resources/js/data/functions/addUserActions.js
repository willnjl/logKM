const addUserActions = (state, { actions, total }) => ({
    ...state,
    user: {
        total,
        actions,
        hasLoaded: true,
    },
});

export default addUserActions;
