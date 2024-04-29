import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const createTechnology = createAsyncThunk(
  // <<<<<<< Updated upstream
  //     "technology/createTechnology",
  //     async (technologyPayload, {rejectWithValue}) => {

  //         try {
  //             console.log("Create Technology...", technologyPayload);

  //             const response = await axios.post(
  //                 AXIOS_BASE_URL + "/technology/addTechnology", technologyPayload
  //             );
  //             console.log("Data",response.data)
  //             return response.data;
  //         } catch (error) {
  //             return rejectWithValue(error.response.data);
  //         }

  "technology/createTechnology",
  async (technologyName, { rejectWithValue }) => {
    try {
      console.log("Create Technology...", technologyName);

      const response = await axios.post(
        AXIOS_BASE_URL +
          "/technology/addTechnology/" +
          encodeURIComponent(technologyName)
      );
      console.log("Data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchAllTechnology = createAsyncThunk(
  "technology/fetchAllTechnology",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/technology/");
      console.log("Data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
