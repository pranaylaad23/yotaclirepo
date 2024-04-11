import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAssociateAssignedTests = createAsyncThunk(
    "associateAssignedTests/fetchAssociateAssignedTests",
    async (trainingData, {rejectWithValue}) => {
        try {
            console.log("service getassociates" + trainingData);
            const response = await axios.get(
                `/yota-api/tests/1/assignedTests`);
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
