import { configureStore, } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import {candidateSlice} from "./slices/candidateSlice";
import { apiSlice } from "./api/apiSlice";
// import { combineReducers } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {
        user: authSlice.reducer,
        candidate: candidateSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true,
});