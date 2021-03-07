const saveUserOverview = (state, { total, count, activities }) => {
    const { data } = state;
    return {
        ...state,
        data: {
            ...data,
            overview: {
                ...data.overview,
                total,
                count,
                activityBreakdown: {
                    ...activities,
                },
            },
        },
    };
};

export default saveUserOverview;
