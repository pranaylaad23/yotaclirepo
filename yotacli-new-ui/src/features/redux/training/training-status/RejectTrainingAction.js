import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrainings } from "../trainingAction"

export const rejectStatusTraining = createAsyncThunk(
    "training/rejectTrainingStatus",
    async (rejectTrainingPayload, { rejectWithValue, dispatch }) => {
      try {
        const token = localStorage.getItem("jwtToken");
        console.log(token);
        console.log(rejectTrainingPayload);
        const response = await axios.put(
          `/yota-api/trainings/updateStatus`,
          rejectTrainingPayload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        dispatch(getTrainings());
        // console.log(response);
        return response.data;
      } catch (error) {
        if (error) {
          return rejectWithValue(error.message);
        }
      }
    }
  );
   