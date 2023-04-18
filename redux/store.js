import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice/authSlice";
import userDetailSlice from "./slices/userDetailSlice";

export const store = configureStore({
  reducer: {
    userDetails: userDetailSlice,
    auth: authSlice,
  },
});
