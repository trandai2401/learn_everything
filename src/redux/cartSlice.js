import { createSlice } from "@reduxjs/toolkit";
import cartService from "../service/cartService";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    status: false,
    items: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setStatus, setCartItems } = cartSlice.actions;

// get .me
export const updateCarts = () => (dispatch) => {
  cartService.get().then((data) => dispatch(setCartItems(data)));
};

export const deleteCart = (courseId) => (dispatch) => {
  cartService.delete(courseId).then(() => {
    cartService.get().then((data) => dispatch(setCartItems(data)));
  });
};

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
