import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../features/batch/CreateBatchSlice";


export const store = configureStore({
  reducer: {
    app: batchReducer,
  },
});

