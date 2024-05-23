import { createSlice } from "@reduxjs/toolkit";
import {questionByCategory } from "./questionAction";

const initialState = {
  categoryquestions: [],
  loading: false,
  error: null,
  success: false,
};

const categoryQuestionSlice = createSlice({
  name: "categoryquestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(questionByCategory.pending, (state) => {
      state.loading = true;
      state.categoryquestions = [];
      state.success = false;
      state.error = null;
    });
    builder.addCase(questionByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.categoryquestions = action.payload;
    });
    builder.addCase(questionByCategory.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.categoryquestions = [];
    });
  },
});

export default categoryQuestionSlice.reducer;
