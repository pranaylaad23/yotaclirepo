import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../redux/features/batch/batchListSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";
import associateReducer from "../redux/features/associate/ListAssociateSlice";
import NotificationListSlice from "../redux/features/notification/NotificationListSlice";
import { assignTest } from "../redux/features/assignTestToCandidate/assignTestSlice";
import listStudentSlice from "../redux/studentDashboard/listStudentSlice";



export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
    associate: associateReducer,
    notification: NotificationListSlice,
    assignTest:assignTest,
    studenttestlink : listStudentSlice

  },
});
