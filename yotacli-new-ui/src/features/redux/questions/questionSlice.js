import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postQuestion } from "./questionAction";

const initialState = {
  postedQuestion: null,
  loading: false,
  error: null,
};
const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.postedQuestion = action.payload;
    });
    builder.addCase(postQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default questionSlice.reducer;
