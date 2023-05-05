
import { configureStore} from "@reduxjs/toolkit";
import  batchReducer  from "../redux/features/batch/CreateBatchSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";

export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
  },
});
