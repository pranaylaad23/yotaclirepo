import { configureStore } from "@reduxjs/toolkit";
import registerAssociate from "../redux/features/associate/RegisterAssociateSlice";


export const store = configureStore({
  reducer: {
    associate: registerAssociate,
  },
});

