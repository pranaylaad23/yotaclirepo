import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTraining = createAsyncThunk(
    "training/addTraining",
    async (trainingObject, { rejectWithValue }) => {
        try {
            console.log("trainingObject " + trainingObject);
            const response = await axios.post(
                AXIOS_BASE_URL + "/training/addTraining", trainingObject
            );
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const listTrainings = createAsyncThunk(
    "training/listTrainings",
    async (_, { rejectWithValue }) => {
        try {
            console.log("Trying fetching associates...");
            const response = await axios.get(
                AXIOS_BASE_URL + "/training/listTraining"
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);