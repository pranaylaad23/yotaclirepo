
import { configureStore} from "@reduxjs/toolkit";
import  batchReducer  from "../redux/features/batch/CreateBatchSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";
// import associateReducers from "../redux/features/associate/RegisterAssociateSlice";
import associateReducer from "../redux/features/associate/ListAssociateSlice";

export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
    associate: associateReducer,
  },
});

