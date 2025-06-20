import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.jsx";
import ProductSlice from "./ProductSlice.jsx";
import AuthSlice from "./AuthSlice.jsx";
import AdminSlice from "./AdminSlice.jsx";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
    auth: AuthSlice,
    admin: AdminSlice,
  },
});

export default store;
