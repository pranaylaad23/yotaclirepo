import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../../../constants/helperConstants";

export const approveTraining = createAsyncThunk(
    "approveTraining/approveTraining",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + `/users/trainer`);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const approveTrainingStatus = createAsyncThunk(
    "approveTraining/approveTraining",
    async (trainingRequest, {rejectWithValue}) => {
        try {
            const response = await axios.put(
                AXIOS_BASE_URL + `/trainings/updateActualStartAndEndDate`,
                trainingRequest);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getTrainingStatus = createAsyncThunk(
    "approveTraining/approveTraining",
    async (trainingRequest, {rejectWithValue}) => {
        try {
            const response = await axios.put(
                AXIOS_BASE_URL + `/trainings/updateTrainingStatus`,
                trainingRequest);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);
