import { createSlice } from "@reduxjs/toolkit";
import {
  getTrainings,
  requestTraining,
  getTrainingById,
  updateTraining,
  deleteTraining,
  uploadExcel,
  addNominations,
  getTrainingsByStatus,
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
    builder.addCase(requestTraining.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(requestTraining.fulfilled, (state, action) => {
      state.loading = false;
      state.trainings = action.payload;
    });
    builder.addCase(requestTraining.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(uploadExcel.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadExcel.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(uploadExcel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addNominations.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addNominations.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addNominations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getTrainingsByStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTrainingsByStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.trainings = action.payload;
      state.success = true;
    });
    builder.addCase(getTrainingsByStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default trainingSlice.reducer;
