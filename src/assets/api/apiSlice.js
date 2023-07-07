import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery( {baseUrl: "https://pollsapp-36x1.onrender.com/"}),
    endpoints: (builder) => ({
            loginUser: builder.mutation({
                query: (newUser) => ({
                    url: '/auth/signup',
                    method: "POST",
                    body: {
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        userName: newUser.userName,
                        password: newUser.password
                    }
                }),
            })
    })
});


export const { useLoginUserMutation } = apiSlice; 