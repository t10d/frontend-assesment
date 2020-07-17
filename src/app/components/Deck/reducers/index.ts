import { DeckState } from "./../services/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const initialState: DeckState = {
  loading: false,
  error: null,
  deck_id: undefined,
  piles: undefined,
};

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    getDeckDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    getDeckDetailsSuccess: (state, action: PayloadAction<DeckState>) => {
      const { deck_id, piles, rotation } = action.payload;
      state.loading = false;
      state.deck_id = deck_id;
      state.piles = piles;
      rotation && (state.rotation = rotation);
    },

    getDeckDetailsError: (state, action: PayloadAction<DeckState>) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    addPilesToDeck: (state, action: PayloadAction<DeckState>) => {
      const { piles } = action.payload;

      state.piles = { ...state.piles, ...piles };
    },
  },
});

export const {
  getDeckDetailsStart,
  getDeckDetailsSuccess,
  getDeckDetailsError,
  addPilesToDeck,
} = deckSlice.actions;

export const selectDeckInfo = (state: RootState) => state.deck;

export default deckSlice.reducer;
