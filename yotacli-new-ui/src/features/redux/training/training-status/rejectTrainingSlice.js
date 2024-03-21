import { createSlice } from "@reduxjs/toolkit";
import {rejectStatusTraining } from "./RejectTrainingAction";

 
const rejectTrainingSlice = createSlice({
  name: "training",
  initialState: {
    rejectTrainingReason: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(rejectStatusTraining.fulfilled, (state, action) => {
      state.loading = false;
      state.rejectTrainingReason = action.payload;
      console.log("state.rejectTrainingReason",state.rejectTrainingReason)
    });
    builder.addCase(rejectStatusTraining.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(rejectStatusTraining.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});
 
export default rejectTrainingSlice.reducer;