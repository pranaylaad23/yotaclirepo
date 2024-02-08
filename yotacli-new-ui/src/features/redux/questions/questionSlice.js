import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postQuestion } from "./questionAction";
import { fetchQuestions } from "./questionAction";
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
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    });

    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default questionSlice.reducer;
