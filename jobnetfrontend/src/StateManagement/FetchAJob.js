import { createSlice } from "@reduxjs/toolkit";

const FetchAJob = createSlice({
    name: "UserDetails",
    initialState: {
        // VARIABLE(STATE) THAT WOULD BE AVAILABLE ACROSS ALL COMPONENT
        isFetching: false,
        UserDetails: null,
        fetchErr: ""
    },
    // FUNCTION THAT WILL CHANGE THE VARIABLE
    reducers: {
        fetchStart : (state) => {
            state.isFetching = true;
            state.JobDetails = null;
            state.fetchErr = ""
        },
        fetchSuccess : (state, action) => {
            state.isFetching = false;
            state.JobDetails = action.payload;
            state.fetchErr = ""
        },
        fetchFailed : (state, action) => {
            state.isFetching = false;
            state.JobDetails = null;
            state.fetchErr = action.payload
        }
    }
})

export const {fetchStart, fetchSuccess, fetchFailed} = FetchAJob.actions
export default FetchAJob.reducer