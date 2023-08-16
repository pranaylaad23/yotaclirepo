import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBatch = createAsyncThunk("batch", () => {
  return axios
    .get(`http://localhost:9090/yota/api/batches/`)
    .then((response) => response.data.map((batch) => batch));
});

export const batchList = createSlice({
  name: "batchList",
  initialState: {
    batches: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchBatch.pending]: (state) => {
      state.loading = true;
    },

    [fetchBatch.fulfilled]: (state, action) => {
      state.loading = false;
      state.batches = action.payload;
    },

    [fetchBatch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default batchList.reducer;
