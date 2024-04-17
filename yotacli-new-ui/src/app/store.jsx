import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../features/login/loginSlice";
import studentSlice from "../features/students/studentSlice";
import trainerSlice from "../features/trainers/trainerSlice";

export const store = configureStore({
    reducer: {
        auth: loginSlice,
        students: studentSlice,
        trainers: trainerSlice,
    }
});
