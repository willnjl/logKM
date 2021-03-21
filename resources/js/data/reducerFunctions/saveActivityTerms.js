let saveActivityTerms = (state, { data }) => {
    return {
        ...state,
        isFetching: false,
        activities: [...data],
    };
};

export default saveActivityTerms;
