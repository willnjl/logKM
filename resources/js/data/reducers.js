import { userInitial, logInitial, RequestsInitial } from "./initial";
import saveUserMeta from "./reducerFunctions/saveUserMeta";
import saveUserData from "./reducerFunctions/saveUserData";
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
            return { ...state, data: { ...data, isFetching: true } };
        case "SUCCESS.USER_FEED":
            return saveUserData(state, action.payload);
        case "LOG_OUT":
            return init("USER");
        case "UPDATE_USER_DATA":
            return userUpdate(state, action.payload);

        default:
            return { ...state };
    }
};
export const logReducer = (state = logInitial, action) => {
    switch (action.type) {
        case "USER_ACTIONS":
            return addUserActions(state, action.payload);
        case "NEW_ACTION":
            return {
                ...state,
                user: { ...state.user, hasLoaded: false },
                team: { ...state.team, hasLoaded: false },
            };
        case "ALL_ACTIONS":
            return updateActions(state, action.payload);
        case "TEAM_DATA":
            return teamData(state, action.payload);
        case "TEAM_FEED":
            return teamFeed(state, action.payload);
        case "LOG_OUT":
            return init("LOG");
        default:
            return { ...state };
    }
};
