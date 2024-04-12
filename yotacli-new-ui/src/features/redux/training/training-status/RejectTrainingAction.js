import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTrainings} from "../trainingAction";
import {AXIOS_BASE_URL} from "../../../../constants/helperConstants";

export const rejectStatusTraining = createAsyncThunk(
    "training/rejectTrainingStatus",
    async (rejectTrainingPayload, {rejectWithValue, dispatch}) => {
        try {
            console.log(rejectTrainingPayload);
            const response = await axios.put(
                AXIOS_BASE_URL + `/trainings/updateStatus`,
                rejectTrainingPayload);
            dispatch(getTrainings());
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);
