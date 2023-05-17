import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../redux/features/batch/CreateBatchSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";
import associateReducer from "../redux/features/associate/RegisterAssociateSlice";

export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
    associate: associateReducer,
  },
});
