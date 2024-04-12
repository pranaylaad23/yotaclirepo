import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {customToast} from "../../../components/common/toast/customToast";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const getTrainings = createAsyncThunk(
    "trainings/getTrainings",
    async (trainingData, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + `/trainings/`);
            return response.data;
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const requestTraining = createAsyncThunk(
    "training/requestTraining",
    async (trainingRequest, {rejectWithValue}) => {
        try {
            const response = await axios.post(
                AXIOS_BASE_URL + `/trainings/`,
                trainingRequest);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.response.data);
            }
        }
    }
);

export const addNominations = createAsyncThunk(
    "training/nominations",
    async (nominations, {rejectWithValue}) => {
        try {
            console.log(nominations);
            const response = await axios.post(
                AXIOS_BASE_URL + `/nominations/`,
                nominations);

            return response.data;
        } catch (error) {
            customToast({
                message: `${error.response.data}`,
                autoClose: 2000,
            });
            return rejectWithValue(error.response.data);
        }
    }
);

export const uploadExcel = createAsyncThunk(
    "excel/uploadExcel",
    async (file, {rejectWithValue}) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            };

            const response = await axios.post(
                AXIOS_BASE_URL + `/nominations/bulkNominations`,
                formData,
                config
            );
            customToast({
                message: `${response.data}`,
                autoClose: 2000,
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getTrainingsByStatus = createAsyncThunk(
    "trainings/getTrainingsByStatus",
    async (status, {rejectWithValue}) => {
        try {
            const response = await axios.get(
                AXIOS_BASE_URL + `/trainings/status/${status}`);
            return response.data;
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const uploadTrainingExcel = createAsyncThunk(
    "excel/uploadExcel",
    async (file, {rejectWithValue, dispatch}) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const response = await axios.post(
                AXIOS_BASE_URL + `/trainings/bulkUploadTrainings`,
                formData,
                config
            );
            customToast({
                message: `${response.data}`,
                autoClose: 2000,
            });
            dispatch(getTrainings());
            return response.data;
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

