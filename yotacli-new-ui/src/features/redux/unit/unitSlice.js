import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUnits } from "./unitAction";

const initialState = {
  postedUnit: [],
  units: [],
  loading: false,
  error: null,
};

const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUnits.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUnits.fulfilled, (state, action) => {
      state.loading = false;
      state.units = action.payload;
    });

    builder.addCase(fetchUnits.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default unitSlice;
