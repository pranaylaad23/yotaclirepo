import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
 
export const getTrainings = createAsyncThunk(
  "trainings/getTrainings",
  async (trainingData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      console.log("service getTrainings" + trainingData);
 
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
 
      const response = await axios.get(
        `/yota-api/trainings/`,
        config
      );
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
export const requestTraining = createAsyncThunk(
  "training/requestTraining",
  async (trainingRequest, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(
        `/yota-api/trainings/`,
        trainingRequest,
        config
      );

      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);