import { truncate } from "lodash";

const updateActions = ({ actions, isLoaded }) => {
    return {
        isLoaded,
        actions,
    };
};

export default updateActions;
