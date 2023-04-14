import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../features/batch/batchListSlice";

export const store = configureStore({
  reducer: {
    app: batchReducer,
  },
});

