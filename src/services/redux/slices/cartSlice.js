import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cart = newCart;
    },

    increaseQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (itemPresent) {
        itemPresent.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (itemPresent.quantity === 1) {
        const newCart = state.cart.filter(
          (item) => item.id !== action.payload.id,
        );
        state.cart = newCart;
      } else {
        itemPresent.quantity--;
      }
    },

    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
