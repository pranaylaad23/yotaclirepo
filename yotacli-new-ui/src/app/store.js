import { configureStore } from "@reduxjs/toolkit";
import securityReducer from "../features/security/securitySlice";
import { securityApi } from "../app/services/securtiy/securtiyService"
export const store = configureStore({
    reducer:{
        security:securityReducer,
        [securityApi.reducerPath]:securityApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(securityApi.middleware)
});