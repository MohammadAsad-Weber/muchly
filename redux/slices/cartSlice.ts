import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Interface
interface CartState {
  id: string;
  quantity: number;
}
// Initial State
const initialState: CartState[] = [];

// Cart Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const item = state.find(({ id }) => id === action.payload);
      if (!item) state.push({ id: action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find(({ id }) => id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find(({ id }) => id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else if (item && item.quantity === 1)
        return state.filter(({ id }) => id !== action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
    clearCart: () => [],
  },
});

// Action Creators
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Selector
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
