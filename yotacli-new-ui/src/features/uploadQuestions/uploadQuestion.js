import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";


export const uploadQuestion = createAsyncThunk(
    "excelQuestion/upload-questions",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(
                AXIOS_BASE_URL + `/excelQuestion/upload-questions`,
                data);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);