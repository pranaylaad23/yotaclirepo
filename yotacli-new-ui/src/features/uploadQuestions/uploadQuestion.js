import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";


export const uploadQuestion = createAsyncThunk(
    "/questions/upload-excel-questions",
    async ({ file, catId, techId }, { rejectWithValue, dispatch }) => {
        try {

            const formData = new FormData();
            formData.append("catId", catId);
            formData.append("techId", techId);
            formData.append("file", file);

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const response = await axios.post(
                AXIOS_BASE_URL + `/questions/upload-excel-questions`,
                formData,
                config);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);