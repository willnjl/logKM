const teamFeed = (state, { data }) => {
    return {
        ...state,
        team: {
            ...state.team,
            feed: {
                data,
                hasLoaded: true,
            },
        },
    };
};

export default teamFeed;
