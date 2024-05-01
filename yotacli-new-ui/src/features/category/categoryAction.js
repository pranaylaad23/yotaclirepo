import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../constants/helperConstants";

export const createCategory = createAsyncThunk(
    "category/createCategory",
    async ({ formData, techId }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${AXIOS_BASE_URL}/category/create-new?techId=${techId}`,
                formData // Correctly pass formData and techId in the request body
            );
            console.log("Data", response.data);
            return response.data;
        } catch (error) {
            // Return the error response data using rejectWithValue
            alert(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllCategoriesUnderTechnologyById = createAsyncThunk(
    "category/getAllCategoriesUnderTechnologyById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${AXIOS_BASE_URL}/category/getAllCategory/${id}`
            );
            console.log("Data", response.data);
            return response.data;
        } catch (error) {
            // Return the error response data using rejectWithValue
            return rejectWithValue(error.response.data);
        }
    }
);
