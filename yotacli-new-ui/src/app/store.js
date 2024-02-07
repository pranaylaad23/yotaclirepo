import { configureStore } from "@reduxjs/toolkit";
import securityReducer from "../features/security/securitySlice";
import { securityApi } from "../app/services/securtiy/securtiyService"
import technologyReducer from "../features/redux/technology/technologySlice";
import testReducer from "../features/redux/test/testSlice";

export const store = configureStore({
    reducer:{
        security:securityReducer,
        technology: technologyReducer,        
        test: testReducer,

        [securityApi.reducerPath]:securityApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(securityApi.middleware)
});