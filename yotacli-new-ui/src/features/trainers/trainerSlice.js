import {createSlice} from "@reduxjs/toolkit";
import {fetchAllTrainers} from "./trainerAction";

const initialState = {
    trainers: [],
    loading: false,
    error: null,
    success: false,
}

const trainerSlice = createSlice({
    name: 'trainers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllTrainers.pending, (state) => {
            state.loading = true;
            state.success = false;
        });
        builder.addCase(fetchAllTrainers.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.trainers = action.payload;
        });
        builder.addCase(fetchAllTrainers.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.trainers = [];
        })
    }
})

export default trainerSlice.reducer;
