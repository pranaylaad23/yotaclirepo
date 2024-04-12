import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {customToast} from "../../../components/common/toast/customToast";
import {AXIOS_BASE_URL} from "../../../constants/helperConstants";

export const fetchTechnologies = createAsyncThunk(
    "technology/fetchTechnologies",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + "/technologies/");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createTechnology = createAsyncThunk(
    "technology/createTechnology",

    async (formData, {rejectWithValue}) => {
        try {
            const response = await axios.post(
                AXIOS_BASE_URL + "/technologies/",
                formData);
            if (response.status === 200) {
                customToast({
                    message: `${"Technology added successfully"}`,
                    autoClose: 2000,
                    type: "success",
                });
                return response.data;
            }
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const createTechCategory = createAsyncThunk(
    "technology/createTechCategory",

    async (formData, {rejectWithValue}) => {
        try {
            await axios.post(AXIOS_BASE_URL + "/categories/create", formData);
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const fetchTechnology = createAsyncThunk(
    "technology/fetchTechnology",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + `/technologies/`);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const fetchTechCategory = createAsyncThunk(
    "technology/fetchTechCategory",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(AXIOS_BASE_URL + `/categories/getAll`);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const fetchTechnologyById = createAsyncThunk(
    "technology/fetchTechnologyById",
    async (technologyId, {rejectWithValue}) => {
        try {
            const response = await axios.get(
                AXIOS_BASE_URL + `/technologies/${technologyId}`);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const deleteTechnology = createAsyncThunk(
    "technology/deleteTechnology",

    async (technologyId, {rejectWithValue}) => {
        try {
            const response = await axios.delete(
                AXIOS_BASE_URL + `/technologies/${technologyId}`);
            if (response.status === 200) {
                customToast({
                    message: `${"Technology deleted successfully"}`,
                    autoClose: 2000,
                    type: "success",
                });
            }
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const editTechnology = createAsyncThunk(
    "technology/editTechnology",

    async (formData, {rejectWithValue}) => {
        try {
            const response = await axios.put(
                AXIOS_BASE_URL + `/technologies/${formData.technologyId}`,
                formData);
            if (response.status === 200) {
                customToast({
                    message: `${"Technology updated successfully"}`,
                    autoClose: 2000,
                    type: "success",
                });
                return response.data;
            }
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
