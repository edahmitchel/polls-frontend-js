import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery( {baseUrl: "https://pollsapp-36x1.onrender.com/"}),
    endpoints: (builder) => ({
            loginUser: builder.mutation({
                query: () => '',
            })
    })
})