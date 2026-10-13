import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      if (!state.some((car) => car.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      return state.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
