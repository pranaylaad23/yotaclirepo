import { createSlice } from "@reduxjs/toolkit";
import { createTest } from "./testAction";

const initialState = {
  tets: [],
  loading: false,
  error: null,
  success: false,
};

const testSlice = createSlice({
  name: "tets",
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
      state.tets.push(action.payload);
    });
    builder.addCase(createTest.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.tets = [];
    });
  },
});

export default testSlice.reducer;
