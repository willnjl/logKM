const updateActions = (state, { actions, hasLoaded }) => {
    return {
        ...state,
        hasLoaded,
        actions,
    };
};

export default updateActions;
