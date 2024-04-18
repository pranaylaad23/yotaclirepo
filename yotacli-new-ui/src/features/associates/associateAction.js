import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../constants/helperConstants";

export const fetchAllAssociates = createAsyncThunk(
    "associates/fetchAllAssociates",
    async (_, {rejectWithValue}) => {

        try {
            console.log("Trying fetching associates...");

            const response = await axios.get(
                AXIOS_BASE_URL + "/users/get/all-associates"
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAllPendingAssociates = createAsyncThunk(
    "associates/fetchPendingAssociates",
    async (_, {rejectWithValue}) => {
        try {
            console.log("Fetched pending associates...");

            const response = await axios.get(
                AXIOS_BASE_URL + "/users/get/all-pending/associates"
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
