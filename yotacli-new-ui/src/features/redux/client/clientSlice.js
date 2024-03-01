import { createSlice } from "@reduxjs/toolkit";
import { fetchClients } from "./clientAction";

const initialState = {
  client: [],
  loading: false,
  error: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("client/createClient/pending", (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase("client/createClient/fulfilled", (state, action) => {
      state.loading = false;
      state.client = action.payload;
    });
    builder.addCase("client/createClient/rejected", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchClients.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.loading = false;
      state.client = action.payload;
      state.success = true;
    });
    builder.addCase(fetchClients.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default clientSlice.reducer;
