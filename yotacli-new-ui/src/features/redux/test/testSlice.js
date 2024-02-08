import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchTestList, postTest } from "./testAction";
const testSlice = createSlice({
  name: "test",
  initialState: {
    testList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestList.fulfilled, (state, action) => {
        state.loading = false;
        state.testList = action.payload;
      })
      .addCase(fetchTestList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTest.fulfilled, (state, action) => {
        state.loading = false;
        state.testList.push(action.payload); 
      })
      .addCase(postTest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
 
export const { } = testSlice.actions;
export default testSlice.reducer;
