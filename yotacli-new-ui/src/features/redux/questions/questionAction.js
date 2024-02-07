import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postQuestion = createAsyncThunk(
  "questions/postQuestion",
  async (questionData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log("service " + questionData);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(
        "/yota-api/questions/",
        questionData,
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
