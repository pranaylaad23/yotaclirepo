import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../features/login/loginSlice";
import associateSlice from "../features/associates/associateSlice";
import trainerSlice from "../features/trainers/trainerSlice";
import technologySlice from "../features/technology/technologySlice";
import trainingSlice from "../features/training/trainingSlice"
import categorySlice from "../features/category/categorySlice";
import questionsSlice from "../features/Question/questionSlice";
import categoryQuestionSlice from "../features/Question/categoryQuestionSlice"


export const store = configureStore({
    reducer: {
        auth: loginSlice,
        associates: associateSlice,
        trainers: trainerSlice,
        technologies:technologySlice,
        categories:categorySlice,
        trainings: trainingSlice,
        questions:questionsSlice,
        categoryquestions:categoryQuestionSlice
    }
});
