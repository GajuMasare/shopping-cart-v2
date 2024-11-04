import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/cart/cartSlice";
import productsReducer from "../src/features/products/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
