import {createSlice} from "@reduxjs/toolkit";
import { createTechnology, fetchAllTechnology } from "./technologyAction";

const initialState = {
    technologies: [],
    loading: false,
    error: null,
    success: false,
}

const technologySlice = createSlice({
    name: 'technologies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createTechnology.pending, (state) => {
            state.loading = true;
            state.success = false;
        });
        builder.addCase(createTechnology.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.technologies.push(action.payload);
        });
        builder.addCase(createTechnology.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.technologies = [];
        });
        builder.addCase(fetchAllTechnology.pending, (state) => {
            state.loading = true;
            state.success = false;
          });
          builder.addCase(fetchAllTechnology.fulfilled, (state,action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.technologies = action.payload;
          });
          builder.addCase(fetchAllTechnology.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
          });
    }
})

export default technologySlice.reducer;
