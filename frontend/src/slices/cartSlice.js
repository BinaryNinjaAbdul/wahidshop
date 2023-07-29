import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItem: [] };

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
