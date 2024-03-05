import { createSlice } from "@reduxjs/toolkit";
import { fetchAssociateAssignedTests } from "./associateAssignedTestsAction";

const initialState = {
  loading: false,
  error: null,
  associateAssignedTestsList: [],
};
const associateAssignedTestsSlice = createSlice({
  name: "associateAssignedTests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("associates/addAssociate/pending", (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase("associates/addAssociate/fulfilled", (state, action) => {
      state.loading = false;
      console.log("action.payload ", action.payload);
      state.associateAssignedTestsList = action.payload;
    });
    builder.addCase("associates/addAssociate/rejected", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchAssociateAssignedTests.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAssociateAssignedTests.fulfilled, (state, action) => {
      state.loading = false;
      state.associateAssignedTestsList = action.payload;
      state.success = true;
    });
    builder.addCase(fetchAssociateAssignedTests.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default associateAssignedTestsSlice.reducer;
