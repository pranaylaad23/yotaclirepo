import { configureStore } from "@reduxjs/toolkit";
import securityReducer from "../features/security/securitySlice";
import { securityApi } from "../app/services/securtiy/securtiyService";
import technologyReducer from "../features/redux/technology/technologySlice";
import testReducer from "../features/redux/test/testSlice";
import trainingsReducer from "../features/redux/training/trainingSlice";
import clientReducer from "../features/redux/client/clientSlice";
import unitSlice from "../features/redux/unit/unitSlice";
import associateSlice from "../features/redux/associate/associateSlice";
import questionSlice from "../features/redux/questions/questionSlice";
import trainingReducer from "../features/redux/training/trainingSlice";
import competencyReducer from "../features/redux/competency/competnencySlice";
import trainingTypeReducer from "../features/redux/training/training-type/trainingTypeSlice";
export const store = configureStore({
  reducer: {
    security: securityReducer,
    technology: technologyReducer,
    test: testReducer,
    trainings: trainingsReducer,
    client: clientReducer,
    unit: unitSlice.reducer,
    associates: associateSlice,
    questions: questionSlice.reducer,
    competency: competencyReducer,
    trainigType: trainingTypeReducer,
    training: trainingReducer,

    [securityApi.reducerPath]: securityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(securityApi.middleware),
});
