let setDistances = (activities) => {
    let keys = Object.keys(activities);
    let result = [];
    keys.forEach((key) => {
        let total = activities[key].reduce((acc, val) => {
            return acc + val;
        }, 0);

        let longest = activities[key].reduce((acc, val) => {
            return acc < val ? val : acc;
        }, 0);

        let obj = {
            activityId: key,
            total,
            longest,
        };
        result.push(obj);
    });
    return result;
};

const saveUserOverview = (state, { total, count, activityBreakdown }) => {
    const { data } = state;

    return {
        ...state,
        data: {
            ...data,
            overview: {
                ...data.overview,
                total,
                count,
                activityBreakdown: setDistances(activityBreakdown),
                isFetching: false,
            },
        },
    };
};

export default saveUserOverview;
