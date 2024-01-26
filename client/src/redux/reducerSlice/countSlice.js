import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const coutSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("hi")
      state.count++
    },
    decrement: (state, action) => {
        state.count--;
    },
  },
});
export const { increment, decrement } = coutSlice.actions;
export default coutSlice.reducer;
