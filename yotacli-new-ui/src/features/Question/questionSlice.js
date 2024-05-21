import { createSlice } from "@reduxjs/toolkit";
import { allQuestion } from "./questionAction";

const initialState = {
  questions: [],
  loading: false,
  error: null,
  success: false,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetching all Question by tech id
    builder.addCase(allQuestion.pending, (state) => {
      state.loading = true;
      state.questions = [];
      state.success = false;
      state.error = null;
    });
    builder.addCase(allQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.questions = action.payload;
    });
    builder.addCase(allQuestion.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.questions = [];
    });
  },
});

export default questionsSlice.reducer;
