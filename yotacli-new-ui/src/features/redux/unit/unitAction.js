import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const createUnit = createAsyncThunk(
    "unit/CreateUnitForm",
    async (formData, {rejectWithValue}) => {
        try {
            await axios.post(AXIOS_BASE_URL + `/units/`, formData);
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const postUnits = createAsyncThunk(
    "units/postunits",
    async ({newUnit}, {rejectWithValue}) => {
        try {
            const response = await axios.post(AXIOS_BASE_URL + "/units/", newUnit);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchUnits = createAsyncThunk(
    "units/fetchUnits",

    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + "/units/");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
