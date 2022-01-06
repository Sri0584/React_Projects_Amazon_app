import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => {
  // The useReducer Hook returns the current state and a dispatchmethod.
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
