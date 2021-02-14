import { userInitial, logInitial } from "../initial";

const logout = (reducer) => {
    return reducer === "LOG" ? logInitial : userInitial;
};

export default logout;
