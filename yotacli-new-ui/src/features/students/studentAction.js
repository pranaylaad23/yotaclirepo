import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../constants/helperConstants";

export const fetchAllStudents = createAsyncThunk(
    "students/fetchAllStudents",
    async (_, {rejectWithValue}) => {

        try {
            console.log("Trying fetching students...");

            const response = await axios.get(
                AXIOS_BASE_URL + "/users/get/all-students"
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
