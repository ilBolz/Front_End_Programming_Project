import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.jsx";
import ProductSlice from "./ProductSlice.jsx";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
  },
});

export default store;
