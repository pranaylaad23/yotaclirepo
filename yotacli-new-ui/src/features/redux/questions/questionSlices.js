import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuestions } from "./questionAction";
const questionSlices = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
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
  },
});

export default questionSlices;
