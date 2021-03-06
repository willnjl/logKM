export const userInitial = {
    loggedIn: false,
    meta: {
        name: "",
        id: "",
        email: "",
        avatar: "",
        team_token: "",
        isFetching: false,
    },
    data: {
        feed: {
            data: [],
            current_page: 0,
            last_page: 0,
            isFetching: false,
        },
        overview: {
            total: 0,
            count: 0,
            activityBreakdown: [],
            isFetching: false,
        },
    },
    error: false,
};

export const logInitial = {
    activityTerms: [],
    team: {
        meta: {
            isFetch: false,
        },
        data: {
            total: 0,
            goal: 0,
        },

        feed: {
            isFetch: false,
        },
    },
};

export const RequestsInitial = {
    loader: {
        actions: [],
        errors: [],
    },
};
