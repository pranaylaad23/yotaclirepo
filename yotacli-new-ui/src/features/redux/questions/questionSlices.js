import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestions, uploadQuestions } from "./questionAction";
const questionSlices = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    uploading: false,
    loading: false,
    uploaded: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
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
    builder.addCase(uploadQuestions.pending, (state) => {
      state.uploading = true;
      state.uploaded = false;
      state.error = null;
    });

    builder.addCase(uploadQuestions.fulfilled, (state, action) => {
      state.uploading = false;
      state.uploaded = true;
      state.error = null;
    });

    builder.addCase(uploadQuestions.rejected, (state, action) => {
      state.uploading = false;
      state.uploaded = false;
      state.error = action.error.message;
    });
  },
});

export default questionSlices;
