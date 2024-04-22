import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {  toast } from 'react-toastify';
import {AXIOS_BASE_URL} from "../../constants/helperConstants";

export const createTechnology = createAsyncThunk(
    "technology/createTechnology",
    async(technologyName, {rejectWithValue}) => {

        try {
            console.log("Create Technology...",technologyName);

            const response = await axios.post(
                AXIOS_BASE_URL + "/technology/addTechnology/" + encodeURIComponent(technologyName)
            );
            console.log("Data",response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
