import { createSlice } from "@reduxjs/toolkit";
import { getTests } from "./testAction";

const initialState = {
  tests: [],
  test: null,
  loading: false,
  error: null,
  success: false,
};

const TestListSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTests.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTests.fulfilled, (state, action) => {
      state.loading = false;
      state.tests = action.payload;
      state.success = true;
    });
    builder.addCase(getTests.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default TestListSlice.reducer;
