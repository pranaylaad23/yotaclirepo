import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../constants/helperConstants";

export const fetchAllTrainers = createAsyncThunk(
    "trainers/fetchAllTrainers",
    async (_, {rejectWithValue}) => {

        try {
            console.log("Trying fetching trainers...");

            const response = await axios.get(
                AXIOS_BASE_URL + "/users/get/all-trainers"
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
