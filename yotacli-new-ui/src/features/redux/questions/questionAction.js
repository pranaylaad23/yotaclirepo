import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customToast } from "../../../components/common/toast/customToast";

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

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",

  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const response = await axios.get("/yota-api/questions/all", config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadQuestions = createAsyncThunk(
  "excel/uploadQuestionExcel",
  async ({ file, technologyId, test }, { rejectWithValue }) => {
    try {
      console.log("check2");
      const token = localStorage.getItem("jwtToken");
      const formData = {
        file: file,
        technologyId: technologyId.toString(),
        test: test.toString(),
      };
      console.log(formData);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(
        `yota-api/questions/upload-questions`,
        formData,
        config
      );
      customToast({
        message: `${response.data}`,
        autoClose: 2000,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        customToast({
          message: `${error.response.data}`,
          autoClose: 2000,
          type: "error",
        });
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
