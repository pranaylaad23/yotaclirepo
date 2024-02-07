import { createSlice } from "@reduxjs/toolkit";
import {
  getTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining,
} from "./trainingAction";

const initialState = {
  trainings: [],
  loading: false,
  error: null,
  success: false,
};

const trainingSlice = createSlice({
  name: "trainings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrainings.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTrainings.fulfilled, (state, action) => {
      state.loading = false;
      state.trainings = action.payload;
      state.success = true;
    });
    builder.addCase(getTrainings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase("requestTraining/pending", (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase("requestTraining/fulfilled", (state, action) => {
      state.loading = false;
      state.trainings = action.payload;
    });
    builder.addCase("requestTraining/rejected", (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default trainingSlice.reducer;
