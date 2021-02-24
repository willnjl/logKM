import { truncate } from "lodash";

const updateActions = (state, { actions, isLoaded }) => {
    return {
        ...state,
        isLoaded,
        actions,
    };
};

export default updateActions;
