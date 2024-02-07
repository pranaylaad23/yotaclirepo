import { createSlice } from "@reduxjs/toolkit";
import { fetchCompetency } from "./competencyAction";

const competencySlice = createSlice({
  name: "competency",
  initialState: {
    competencyList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompetency.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCompetency.fulfilled, (state, action) => {
      state.loading = false;
      state.competencyList = action.payload;
    });
    builder.addCase(fetchCompetency.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default competencySlice.reducer;
