import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "@/redux/slices/cartSlice";
import wishlistReducer from "@/redux/slices/wishlistSlice";

// Store configuration function
export const makeStore = () => {
  return configureStore({
    reducer: {
      wishlist: wishlistReducer,
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
