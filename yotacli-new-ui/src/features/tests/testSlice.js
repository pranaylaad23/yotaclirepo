import { createSlice } from "@reduxjs/toolkit";
import { addTest, countQuestion, getAllTest, questionUnderTechnologyId } from "./testAction";

const initialState = {
  tests: [],
  question: [],
  loading: false,
  error: null,
  success: false,
  questionCount: 0,
  easyCount: 0,
  mediumCount: 0,
  hardCount: 0
};

const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTest.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(addTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.tests.push(action.payload);
    });
    builder.addCase(addTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });

    builder.addCase(countQuestion.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(countQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.questionCount = action.payload.questionCount;
      state.easyCount = action.payload.easyCount;
      state.mediumCount = action.payload.mediumCount;
      state.hardCount = action.payload.hardCount;
    });
    builder.addCase(countQuestion.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });

    //question by technology
    builder.addCase(questionUnderTechnologyId.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(questionUnderTechnologyId.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.question = action.payload;
    });
    builder.addCase(questionUnderTechnologyId.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.question = [];
    });

     //get all test
     builder.addCase(getAllTest.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getAllTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.tests = action.payload;
    });
    builder.addCase(getAllTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });
  },
});

export default testSlice.reducer;
