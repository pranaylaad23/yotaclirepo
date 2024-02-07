import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUnits } from "./unitAction";
import { fetchUnit } from "./unitAction";

const initialState = {
  postedUnit: [],
  loading: false,
  error: null,
};

const unitSlice = createSlice({
  name: "units",

  initialState: {
    units: [],

    loading: false,

    error: null,
  },

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
    builder.addCase(fetchUnit.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUnit.fulfilled, (state, action) => {
      state.loading = false;
      state.unitList = action.payload;
    });
    builder.addCase(fetchUnit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default unitSlice;
