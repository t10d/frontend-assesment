import React, { createContext, useContext, useReducer } from "react";
import deckData from "./deckData";

export const StateContext = createContext();

export const initialGlobalState = {
  deckData
};

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
