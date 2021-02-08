import { userInitial, logInitial } from "./initial";

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state };
    default:
      return { ...state };
  }
};
export const logReducer = (state = logInitial, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state };
    default:
      return { ...state };
  }
};
