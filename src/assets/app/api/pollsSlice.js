import { apiSlice } from "./apiSlice";
const POLLS_URL = '/api/polls';

export const pollsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        createElection: builder.mutation({
            query: (data) =>({
                method: 'POST',
                url: `${POLLS_URL}/create`,
                body: data
            })
        })
    })
});

export const {useCreateElectionMutation} = pollsApiSlice
