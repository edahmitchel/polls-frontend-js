import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery( {baseUrl: "https://pollsapp-36x1.onrender.com/"}),
    endpoints: (builder) => ({
            registerUser: builder.mutation({
                query: (newUser) => ({
                    url: '/auth/signup',
                    method: "POST",
                    body: newUser
                }),
            }),
            loginUser: builder.mutation({
                query: (userData) => ({
                    url: "/auth/login",
                    method: "POST",
                    body: userData
                }),
            })
    })
});


export const { useRegisterUserMutation, useLoginUserMutation } = apiSlice; 