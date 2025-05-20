import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Initial State
const initialState: string[] = [];

// Wishlist Slice
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<string>) => {
      const item = state.find((id) => id === action.payload);
      if (!item) state.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

// Action Creators
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Selector
export const selectWishlist = (state: RootState) => state.wishlist;

export default wishlistSlice.reducer;
