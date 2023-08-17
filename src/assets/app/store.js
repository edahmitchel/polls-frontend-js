import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { candidateSlice } from "./slices/candidateSlice";
// import { combineReducers } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: authReducer,
    candidate: candidateSlice.reducer,
  },
});
