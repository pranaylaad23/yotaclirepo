import {createSlice} from "@reduxjs/toolkit";
import { createCategory, getAllCategoriesUnderTechnologyById } from "./categoryAction";

const initialState = {
    categories: [],
    loading: false,
    error: null,
    success: false,
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createCategory.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.categories.push(action.payload);
        });
        builder.addCase(createCategory.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });
        builder.addCase(getAllCategoriesUnderTechnologyById.pending, (state) => {
            state.loading = true;
            state.success = false;
          });
          builder.addCase(getAllCategoriesUnderTechnologyById.fulfilled, (state,action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.categories = action.payload;
          });
          builder.addCase(getAllCategoriesUnderTechnologyById.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
          });
    }
})

export default categorySlice.reducer;