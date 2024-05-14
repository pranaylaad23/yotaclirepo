import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const fetchAllAssociates = createAsyncThunk(
  "associates/fetchAllAssociates",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Trying fetching associates...");

      const response = await axios.get(
        AXIOS_BASE_URL + "/users/get/all-associates"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllPendingAssociates = createAsyncThunk(
  "associates/fetchPendingAssociates",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Fetched pending associates...");

      const response = await axios.get(
        AXIOS_BASE_URL + "/users/get/all-pending/associates"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const approvePendingAssociate = createAsyncThunk(
  "associates/approvePendingAssociate",
  async (email, { rejectWithValue }) => {
    try {
      console.log("Approving pending associate...");

      const config = {
        params: {
          email: email,
        },
      };
      const response = await axios.put(
        AXIOS_BASE_URL + "/users/approve/associate",
        null,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const declinePendingAssociate = createAsyncThunk(
  "associates/declinePendingAssociate",
  async (email, { rejectWithValue }) => {
    try {
      console.log("Declining pending associate...");

      const param = {
        params: {
          email: email,
        },
      };
      const response = await axios.put(
        AXIOS_BASE_URL + "/users/decline/associate",
        null,
        param
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllAssociatesByStatus = createAsyncThunk(
  "associates/fetchAllAssociatesByStatus",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Trying fetching associates...");

      const response = await axios.get(
        AXIOS_BASE_URL + "/users/all-associates-status",
        {
          params: {
            status: "APPROVED",
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRegisteredAssociates = createAsyncThunk(
  "associates/fetchRegisteredAssociates",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Fetched Registered Associates...");

      const response = await axios.get(
        AXIOS_BASE_URL + "/users/get/all-registered/associates?trainingId=1"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllAssociatesTrainingsByEmailId = createAsyncThunk(
  "associates/fetchAllAssociatesTrainingsByEmailId",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/training/assigned?email=${email}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllAssociatesTestByEmailId = createAsyncThunk(
  "associates/fetchAllAssociatesTestByEmailId",
  async (email, { rejectWithValue }) => {
    console.log("email",email)
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/associate/assignedTest?email=${email}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
