import { userInitial, logInitial } from "./initial";
import userData from "./functions/userData";
import init from "./functions/init";
import updateActions from "./functions/updateActions";
import userUpdate from "./functions/userUpdate";
import addUserActions from "./functions/addUserActions";
import teamData from "./functions/teamData";

export const userReducer = (state = userInitial, action) => {
    switch (action.type) {
        case "USER_DATA":
            return userData(state, action.payload);
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
            return { ...state, user: { ...state.user, hasLoaded: false } };
        case "ALL_ACTIONS":
            return updateActions(state, action.payload);
        case "TEAM_DATA":
            return teamData(state, action.payload);
        case "LOG_OUT":
            return init("LOG");
        default:
            return { ...state };
    }
};
