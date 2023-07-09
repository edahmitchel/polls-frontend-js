import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery( {baseUrl: "https://pollsapp-36x1.onrender.com/"}),
    endpoints: (builder) => ({
            registerUser: builder.mutation({
                query: (newUser) => ({
                    url: '/api/auth/signup',
                    method: "POST",
                    data: newUser
                }),
            }),
            loginUser: builder.mutation({
                query: (userData) => ({
                    url: "/api/auth/login",
                    method: "POST",
                    data: userData
                }),
            })
    })
});


export const { useRegisterUserMutation, useLoginUserMutation } = apiSlice; 