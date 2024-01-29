import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postedQuestion: null,
  loading: false,
  error: null,
};

const backendURL = "http://localhost:8080";

export const postQuestion = createAsyncThunk(
  "questions/postQuestion",
  async ({ newQuestion }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(
        `${backendURL}/yota-api/questions/`,
        newQuestion,
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.postedQuestion = action.payload;
    });
    builder.addCase(postQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default questionSlice.reducer;
