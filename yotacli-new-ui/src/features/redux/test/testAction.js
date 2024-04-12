import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const fetchTestList = createAsyncThunk(
    "test/fetchTestList",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + "/tests/");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const postTest = createAsyncThunk(
    "test/postTest",
    async (testData, {rejectWithValue}) => {
        try {
            const response = await axios.post(AXIOS_BASE_URL + "/tests/", testData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getTests = createAsyncThunk(
    "tests/getTests",
    async (testData, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + "/tests/");
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
