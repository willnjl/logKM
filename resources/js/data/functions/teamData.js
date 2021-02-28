const teamData = (state, { team_total, mates }) => {
    let addLoad = (mates) => {
        return mates.map((mate) => ({ ...mate, hasLoaded: false }));
    };
    return {
        ...state,
        team_total,
        team: {
            hasLoaded: true,
            mates: addLoad(mates),
        },
    };
};

export default teamData;
