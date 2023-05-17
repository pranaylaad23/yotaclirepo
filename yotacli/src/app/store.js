import { configureStore } from "@reduxjs/toolkit";
import associateReducer from "../redux/features/associate/RegisterAssociateSlice";


export const store = configureStore({
  reducer: {
    associate: associateReducer,
  },
});

