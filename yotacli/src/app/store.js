import { configureStore} from "@reduxjs/toolkit";
import  batchReducer  from "../redux/features/batch/CreateBatchSlice";



export const store = configureStore({
  reducer: {
    batch: batchReducer,
  },
});

