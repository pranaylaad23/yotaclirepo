import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../../components/utils/Authentication";

export const fetchBatch = createAsyncThunk("batch", () => {
  const token = getAuthToken();
  return axios.get(`http://localhost:9090/yota/api/batches/`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token
        },
      }
    )
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
