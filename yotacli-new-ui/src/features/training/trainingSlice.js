import { createSlice } from '@reduxjs/toolkit';
import { addTraining, assignTraining, assignedAssociateList, listTrainings } from './trainingAction';

const initialState = {
  trainings: [],
  loading: false,
  error: null,
  success: false,
};

const trainingSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTraining.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(addTraining.fulfilled, (state, action) => {
      state.loading = false;
      state.trainings = action.payload;
      state.success = true;
    });
    builder.addCase(addTraining.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    builder
      .addCase(listTrainings.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(listTrainings.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.trainings = action.payload;
      })
      .addCase(listTrainings.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      //assign training
      builder
      .addCase(assignTraining.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(assignTraining.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.trainings = action.payload;
      })
      .addCase(assignTraining.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      //Assigned associate in training list
    builder
    .addCase(assignedAssociateList.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase(assignedAssociateList.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.trainings = action.payload;
    })
    .addCase(assignedAssociateList.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    })
      ;
  }
});

export default trainingSlice.reducer;
