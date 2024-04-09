import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrainings } from "../trainingAction";

export const editTraining = createAsyncThunk(
  "training/editTrainingStatus",
  async (editTrainingPayload, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      console.log(editTrainingPayload);
      const response = await axios.put(
        `/yota-api/trainings/updatetrainingreason`,
        editTrainingPayload,
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
