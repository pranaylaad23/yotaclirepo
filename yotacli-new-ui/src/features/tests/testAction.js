import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const createTest = createAsyncThunk(
  "test/createTest",
  async (TestPayload, { rejectWithValue }) => {
    try {
      console.log("Create Test...", TestPayload);

      const response = await axios.post(
        AXIOS_BASE_URL + "/tests/addTest",
        TestPayload
      );
      console.log("Data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
