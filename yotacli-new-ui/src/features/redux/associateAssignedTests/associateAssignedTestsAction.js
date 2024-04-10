import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchAssociateAssignedTests = createAsyncThunk(
  "associateAssignedTests/fetchAssociateAssignedTests",
  async (trainingData, { rejectWithValue }) => {
    try {
      // const token = localStorage.getItem("jwtToken");
      // console.log(token);
      console.log("service getassociates" + trainingData);

      const config = {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `${token}`,
        // },
      };
      const response = await axios.get(
        `/yota-api/tests/1/assignedTests`,
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
