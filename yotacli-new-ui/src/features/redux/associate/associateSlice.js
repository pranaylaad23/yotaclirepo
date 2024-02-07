import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  associate: null,
};
const associateSlice = createSlice({
  name: "associates",
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
  },
});
export default associateSlice.reducer;
