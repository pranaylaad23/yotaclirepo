import {createSlice} from "@reduxjs/toolkit";
import { createTechnology } from "./technologyAction";

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
        })
    }
})

export default technologySlice.reducer;
