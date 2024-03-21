import { createSlice } from "@reduxjs/toolkit";
import { approveTraining } from "./approveTrainingAction";

const approveTrainingSlice = createSlice({
  name: "fetchTrainer",
  initialState: {
    ListTrainer: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(approveTraining.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(approveTraining.fulfilled, (state, action) => {
      state.loading = false;
      state.ListTrainer = action.payload;
    });
    builder.addCase(approveTraining.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default approveTrainingSlice.reducer;
