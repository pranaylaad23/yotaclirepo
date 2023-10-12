import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTest = createAsyncThunk("test", () => {
  return (
    axios
      .get(`  http://localhost:5000/testList`)
      //.then(response=>console.log( "----------"+response.data))
      .then((response) => response.data)
      .catch((error) => console.log("ERROR"))
  );
});

export const testList = createSlice({
  name: "testList",
  initialState: {
    tests: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchTest.pending]: (state) => {
      state.loading = true;
    },

    [fetchTest.fulfilled]: (state, action) => {
      state.loading = false;
      state.tests = action.payload;
      console.log(action.payload);
    },

    [fetchTest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default testList.reducer;
