import { configureStore } from "@reduxjs/toolkit";
import createTech from "../redux/features/technology/CreateTechSlice";

export const store = configureStore({
  reducer: {
    app: createTech,
  },
});
