import { userInitial, logInitial, RequestsInitial } from "./initial";
import saveUserMeta from "./reducerFunctions/saveUserMeta";
import saveUserData from "./reducerFunctions/saveUserData";
import saveUserOverview from "./reducerFunctions/saveUserOverview";
import init from "./reducerFunctions/init";
import updateActions from "./reducerFunctions/updateActions";
import userUpdate from "./reducerFunctions/userUpdate";

import teamData from "./reducerFunctions/teamData";
import teamFeed from "./reducerFunctions/teamFeed";

export const userReducer = (state = userInitial, action) => {
    let { data, meta } = state;
    switch (action.type) {
        case "FETCH.USER_DATA":
            return { ...state, isFetching: true };
        case "SUCCESS.USER_DATA":
            return saveUserMeta(state, action.payload);
        case "FETCH.USER_FEED":
            return {
                ...state,
                data: { ...data, feed: { ...data.feed, isFetching: true } },
            };
        case "SUCCESS.USER_FEED":
            return saveUserData(state, action.payload);
        case "FETCH.USER_OVERVIEW":
            return {
                ...state,
                data: {
                    ...data,
                    overview: { ...data.overview, isFetching: true },
                },
            };
        case "SUCCESS.USER_OVERVIEW":
            return saveUserOverview(state, action.payload);
        case "LOG_OUT":
            return init("USER");
        case "UPDATE_USER_DATA":
            return userUpdate(state, action.payload);

        default:
            return { ...state };
    }
};
export const TeamReducer = (state = logInitial, action) => {
    switch (action.type) {
        case "SUCCESS.GET_TERMS":
            return { ...state, activityTerms: [...action.payload] };
        default:
            return { ...state };
    }
};

export const TermsRedeucer = (
    state = { activities: { isFetching: false } },
    action
) => {
    switch (action.type) {
        case "FETCH.ACTIVITY_TERMS":
            return { ...state, activities: { isFetching: true } };
        case "SUCCESS.ACTIVITY_TERMS":
            return {
                ...state,
                activities: { ...action.payload, isFetching: false },
            };
        default:
            return {
                ...state,
            };
    }
};
