import { createSlice } from "@reduxjs/toolkit";
import { fetchAssociates } from "./associateAction";

const initialState = {
  loading: false,
  error: null,
  associate: [],
};
const associateSlice = createSlice({
  name: "associate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("associates/addAssociate/pending", (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase("associates/addAssociate/fulfilled", (state, action) => {
      state.loading = false;
      state.associate = action.payload;
    });
    builder.addCase("associates/addAssociate/rejected", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchAssociates.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAssociates.fulfilled, (state, action) => {
      state.loading = false;
      state.associate = action.payload;
      state.success = true;
    });
    builder.addCase(fetchAssociates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default associateSlice.reducer;