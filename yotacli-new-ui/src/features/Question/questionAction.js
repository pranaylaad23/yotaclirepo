import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const allQuestion = createAsyncThunk(
  "question/allQuestion",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/list/tech?techId=${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const questionByCategory = createAsyncThunk(
  "question/questionByCategory",
  async ({catId,techId},{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/all/cat?catId=${catId}&techId=${techId}`
      );
      console.log("category data",response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
