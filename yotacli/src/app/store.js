import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../redux/features/batch/batchListSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";
import associateReducer from "../redux/features/associate/ListAssociateSlice";
import { assignTest } from "../redux/features/assignTestToCandidate/assignTestSlice";


export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
    associate: associateReducer,
    assignTest:assignTest
    
  },
});
