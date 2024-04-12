import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTrainings} from "../trainingAction";
import {AXIOS_BASE_URL} from "../../../../constants/helperConstants";

export const editTraining = createAsyncThunk(
    "training/editTrainingStatus",
    async (editTrainingPayload, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.put(
                AXIOS_BASE_URL + `/trainings/updatetrainingreason`,
                editTrainingPayload);
            dispatch(getTrainings());
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);
