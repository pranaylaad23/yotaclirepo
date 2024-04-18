import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../features/login/loginSlice";
import associateSlice from "../features/associates/associateSlice";
import trainerSlice from "../features/trainers/trainerSlice";

export const store = configureStore({
    reducer: {
        auth: loginSlice,
        associates: associateSlice,
        trainers: trainerSlice,
    }
});
