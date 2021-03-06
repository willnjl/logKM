import { userInitial, logInitial } from "../initial";

const init = (reducer) => {
    return reducer === "LOG" ? logInitial : userInitial;
};

export default init;
