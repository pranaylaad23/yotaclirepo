import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const createClient = createAsyncThunk(
    "client/createClient",
    async (formData, {rejectWithValue}) => {
        try {
            await axios.post(AXIOS_BASE_URL + "/clients/", formData);
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const fetchClients = createAsyncThunk(
    "client/getClients",
    async (formData, {rejectWithValue}) => {
        try {
            await axios.get(AXIOS_BASE_URL + "/clients/", formData);
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
