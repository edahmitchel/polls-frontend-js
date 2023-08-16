import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        username: '',
        password: '',
    },
    reducers: {
        login: (state, action) =>{
            state = action.payload;
            console.log(action.payload)
        }
    }
})

export const {login} = authSlice.actions;