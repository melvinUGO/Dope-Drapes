import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types";
import { produce } from "immer";

type ActionPayload = {
  id: string;
  size: string;
};

let lsCart: Cart[] = []; // Local storage cart

if (typeof window !== "undefined") {
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    lsCart = JSON.parse(cart);
  }
}

// Set the initial cart state to match cart in local storage.
const initialState: Cart[] = lsCart.length > 0 ? lsCart : [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action: PayloadAction<Cart>) => {
      const newCartItem = action.payload;

      if (newCartItem.quantity < 1) {
        return [...state];
      }

      return [...state, newCartItem];
    },

    decreaseCartItem(state, action: PayloadAction<ActionPayload>) {
      const { id, size } = action.payload;
      const index = state.findIndex(
        (obj) => obj.id === id && obj.size === size
      );
      if (state.length > 0 && index >= 0) {
        // Immer will handle immutability for us
        state[index].quantity -= 1;
        // If quantity becomes 0 or less, remove the item
        if (state[index].quantity <= 0) {
          state.splice(index, 1);
        }
      }
      // No need to return a new array, Immer will do it
    },

    // Increase quantity of item in cart
    increaseCartItem: (state, action: PayloadAction<ActionPayload>) => {
      const { id, size } = action.payload;
      const index = state.findIndex(
        (obj) => obj.id === id && obj.size === size
      );

      state[index].quantity = state[index]?.quantity + 1;
    },

    // Clear all cart items
    clearCart: () => {
      localStorage.removeItem("cart");
      return initialState;
    },
  },
});

export const { addToCart, decreaseCartItem, increaseCartItem, clearCart } =
  cart.actions;
export default cart.reducer;
