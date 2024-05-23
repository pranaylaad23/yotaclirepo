import { createSlice } from "@reduxjs/toolkit";
import { createTest, fetchCategory } from "./testAction";

const initialState = {
  tests: [],
  loading: false,
  error: null,
  success: false,
};

const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTest.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(createTest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.tests.push(action.payload);
    });
    builder.addCase(createTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tests = [];
    });
  },
});

export default testSlice.reducer;
