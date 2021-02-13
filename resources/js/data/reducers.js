import { userInitial, logInitial } from "./initial";
import login from "./functions/login";

export const userReducer = (state = userInitial, action) => {
    switch (action.type) {
        case "LOG_IN":
            return login(action.payload);
        default:
            return { ...state };
    }
};
export const logReducer = (state = logInitial, action) => {
    switch (action.type) {
        case "LOG_IN":
            return { ...state };
        default:
            return { ...state };
    }
};
