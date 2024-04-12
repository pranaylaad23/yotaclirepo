import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../../../constants/helperConstants";

export const fetchTrainingType = createAsyncThunk(
    "trainingType/fetchTrainingType",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + `/masters/training-type/`);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);
