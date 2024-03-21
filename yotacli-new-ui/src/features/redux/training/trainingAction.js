import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrainings = createAsyncThunk(
  "trainings/getTrainings",
  async (trainingData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.get(`/yota-api/trainings/`, config);
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

// export const requestTraining = createAsyncThunk(
//   "trainingRequest/requestTraining",
//   async (trainingRequest, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("jwtToken");
//       console.log(token);
//       const response = await axios.post(
//         `/yota-api/trainings/`,
//         trainingRequest,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       if (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
