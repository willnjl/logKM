const teamData = (state, { team_total, mates, goal }) => {
    console.log(goal);
    let addLoad = (mates) => {
        return mates.map((mate) => ({ ...mate, hasLoaded: false }));
    };
    return {
        ...state,
        team: {
            team_total,
            hasLoaded: true,
            mates: addLoad(mates),
            goal,
        },
    };
};

export default teamData;
