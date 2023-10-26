import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTechnology = createAsyncThunk("technology", async () => {
  return axios
    .get(`http://localhost:9090/yota/api/technologies/`)
    .then((response) => response.data.map((technology) => technology));
});
export const techList = createSlice({
  name: "techList",
  initialState: {
    technologies: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchTechnology.pending]: (state) => {
      state.loading = true;
    },

    [fetchTechnology.fulfilled]: (state, action) => {
      state.loading = false;
      state.technologies = action.payload;
    },

    [fetchTechnology.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default techList.reducer;
