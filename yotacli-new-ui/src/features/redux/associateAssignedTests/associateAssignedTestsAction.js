import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const fetchAssociateAssignedTests = createAsyncThunk(
    "associateAssignedTests/fetchAssociateAssignedTests",
    async (trainingData, {rejectWithValue}) => {
        try {
            console.log("service getassociates" + trainingData);
            const response = await axios.get(
                AXIOS_BASE_URL + `/tests/1/assignedTests`);
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
