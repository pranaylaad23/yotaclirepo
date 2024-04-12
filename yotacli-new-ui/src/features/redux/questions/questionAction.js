import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {customToast} from "../../../components/common/toast/customToast";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const postQuestion = createAsyncThunk(
    "questions/postQuestion",
    async (questionData, {rejectWithValue}) => {
        try {
            console.log("service " + questionData);
            const response = await axios.post(
                AXIOS_BASE_URL + "/questions/",
                questionData);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchQuestions = createAsyncThunk(
    "questions/fetchQuestions",

    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + "/questions/all");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const uploadQuestions = createAsyncThunk(
    "excel/uploadQuestionExcel",
    async ({file, technologyId, test}, {rejectWithValue}) => {
        try {
            console.log("check2");
            const formData = {
                file: file,
                technologyId: technologyId.toString(),
                test: test.toString(),
            };

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            console.log(formData);

            const response = await axios.post(
                AXIOS_BASE_URL + `/questions/upload-questions`,
                formData,
                config);
            customToast({
                message: `${response.data}`,
                autoClose: 2000,
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                customToast({
                    message: `${error.response.data}`,
                    autoClose: 2000,
                    type: "error",
                });
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
