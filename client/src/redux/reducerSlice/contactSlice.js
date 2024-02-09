import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favUser: [],
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addTofavourite: (state, action) => {
          state.favUser.push(action.payload)
    },
    removeFromFavourites: (state, action) => {},
  },
});

export const { addTofavourite, removeFromFavourites } = contactSlice.actions;
export default contactSlice.reducer;
