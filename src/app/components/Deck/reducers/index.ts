import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  x: 0,
};

export const newDeckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    example: (state) => {
      state.x = 250;
    },
  },
});

export const { example } = newDeckSlice.actions;
