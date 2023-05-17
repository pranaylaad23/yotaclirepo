import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../redux/features/technology/CreateTechSlice";

export const store = configureStore({
  reducer: {
    technology: technologyReducer,
  },
});
