import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../constants/helperConstants";

export const createTechnology = createAsyncThunk(
    "technology/createTechnology",
    async (technologyPayload, {rejectWithValue}) => {

        try {
            console.log("Create Technology...", technologyPayload);

            const response = await axios.post(
                AXIOS_BASE_URL + "/technology/addTechnology", technologyPayload
            );
            console.log("Data",response.data)
            return response.data;
        } catch (error) {
            alert(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
export const fetchAllTechnology = createAsyncThunk(
    "technology/fetchAllTechnology",
    async(_, {rejectWithValue}) => {

        try {
            const response = await axios.get(
                AXIOS_BASE_URL + "/technology/"
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);