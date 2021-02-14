import { userInitial, logInitial } from "./initial";
import login from "./functions/login";
import logout from "./functions/logout";
import updateActions from "./functions/updateActions";
import userUpdate from "./functions/userUpdate";

export const userReducer = (state = userInitial, action) => {
    switch (action.type) {
        case "LOG_IN":
            return login(action.payload);
        case "LOG_OUT":
            return logout("USER");
        case "UPDATE":
            return userUpdate(state, action.payload);
        default:
            return { ...state };
    }
};
export const logReducer = (state = logInitial, action) => {
    switch (action.type) {
        case "ALL_ACTIONS":
            return updateActions(action.payload);
        case "LOG_OUT":
            return logout("LOG");
        default:
            return { ...state };
    }
};
