import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const addAssociate = createAsyncThunk(
  "associates/addAssociate",

  async (formData, { rejectWithValue }) => {
    const token = localStorage.getItem("jwtToken");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      await axios.post("/yota-api/associates/register", formData, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchAssociates = createAsyncThunk(
  "associates/fetchAssociates",
  async (trainingData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      console.log("service getassociates" + trainingData);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.get(`/yota-api/associates/`, config);
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