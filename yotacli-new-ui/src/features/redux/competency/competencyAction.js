import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCompetency = createAsyncThunk(
  "competency/fetchCompetency",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await axios.get(`/yota-api/masters/competency/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);