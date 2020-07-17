import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import deckReducer from "../app/components/Deck/reducers";

export const store = configureStore({
  reducer: {
    deck: deckReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
