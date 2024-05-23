import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const addTest = createAsyncThunk(
  "test/addTest",
  async (TestPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/test/add-test",
        TestPayload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const countQuestion = createAsyncThunk(
  "test/countQuestion",
  async (technologyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/questions/count-details",
        {
          params: {
            techId: technologyId
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const questionUnderTechnologyId = createAsyncThunk(
  "test/questionUnderTechnologyId",
  async (technologyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/list/tech`, {
        params: {
          techId: technologyId
        }
      }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
