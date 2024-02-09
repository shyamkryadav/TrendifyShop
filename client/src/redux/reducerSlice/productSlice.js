import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
  cartItems: []
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToWishList:(state,action)=>{
      state.wishList.push(action.payload)

    },
    removeToWishList:(state,action)=>{

    }
}});

export const { addToWishList,removeToWishList } = productSlice.actions;
export default productSlice.reducer;