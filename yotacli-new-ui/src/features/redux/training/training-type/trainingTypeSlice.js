import { createSlice } from "@reduxjs/toolkit";
import { fetchTrainingType } from "./trainingTypeAction";

const trainingTypeSlice = createSlice({
  name: "trainigType",
  initialState: {
    trainingTypeList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrainingType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTrainingType.fulfilled, (state, action) => {
      state.loading = false;
      state.trainingTypeList = action.payload;
    });
    builder.addCase(fetchTrainingType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default trainingTypeSlice.reducer;