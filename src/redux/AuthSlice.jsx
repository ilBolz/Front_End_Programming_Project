import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  role: null, // 'user' | 'admin' | null
  isAuthenticated: false,
  isAdmin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { username } = action.payload;
      state.username = username;
      state.role = "user";
      state.isAuthenticated = true;
      state.isAdmin = false;
    },
    loginAdmin(state, action) {
      const { username } = action.payload;
      state.username = username;
      state.role = "admin";
      state.isAuthenticated = true;
      state.isAdmin = true;
    },
    register(state, action) {
      const { username } = action.payload;
      state.username = username;
      state.role = "user";
      state.isAuthenticated = true;
      state.isAdmin = false;
    },
    logout(state) {
      state.username = null;
      state.role = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },
});

export const { login, loginAdmin, register, logout } = authSlice.actions;
export default authSlice.reducer;
