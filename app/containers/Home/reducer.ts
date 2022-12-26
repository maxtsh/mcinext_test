import type { StateType, ActionTypes } from "./Home.types";

export const initialState: StateType = {
  page: 0,
  limit: 20,
  search: "",
  sort: "forename",
};

export const reducer = (state: StateType, action: ActionTypes) => {
  switch (action.type) {
    case "limit":
      return { ...state, limit: action.payload };

    case "page":
      return {
        ...state,
        page: action.payload,
      };

    case "search":
      return {
        ...state,
        search: action.payload,
      };

    case "sort":
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return { ...state };
  }
};
