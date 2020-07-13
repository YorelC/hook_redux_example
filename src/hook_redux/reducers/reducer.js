import React from "react";

import { actions } from "../actions/action";

export const StateContext = React.createContext(null);
export const AppContext = React.createContext(null);

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      console.log("ENter reducer");
      console.log("value of action.payload: " + action.payload);
      console.log("value of state: " + state.count);

      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
};
