import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    },
    reducers: {
        login: (state, action) =>{
            state = action.payload;
        }
    }
})

export const {login} = authSlice.actions;