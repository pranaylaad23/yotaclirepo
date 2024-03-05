import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestList = createAsyncThunk(
  "test/fetchTestList",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await axios.get("/yota-api/tests/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postTest = createAsyncThunk(
  "test/postTest",
  async (testData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post("/yota-api/tests/", testData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTests = createAsyncThunk(
  "tests/getTests",
  async (testData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.get(`/yota-api/tests/`, config);

      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
