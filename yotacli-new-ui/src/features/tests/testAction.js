import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

//add test
export const addTest = createAsyncThunk(
  "test/addTest",
  async (TestPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/tests/add-test",
        TestPayload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const countQuestion = createAsyncThunk(
  "test/countQuestion",
  async (technologyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/questions/count-details",
        {
          params: {
            techId: technologyId
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const questionUnderTechnologyId = createAsyncThunk(
  "test/questionUnderTechnologyId",
  async (technologyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + `/questions/get/list/tech`, {
        params: {
          techId: technologyId
        }
      }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//get all test
export const getAllTest = createAsyncThunk(
  "test/getAllTest",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(AXIOS_BASE_URL + "/tests/all-test");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add question in test
export const addQuestionInTest = createAsyncThunk(
  "test/addQuestionInTest",
  async ({ questionIds, testId }, { rejectWithValue }) => {

    console.log("Test id = " + testId);

    // Convert array to JSON string
    const jsonArray = JSON.stringify(questionIds);
    console.log("Question = " + jsonArray);

    try {
      const response = await axios.post(
        AXIOS_BASE_URL + "/tests/add-question-in-test",
        jsonArray,
        {
          params: { testId: testId }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const updateTotalQuestionCount = createAsyncThunk(
  "test/updateTotalQuestionCount",
  async ({ totalQuestionCount, testId }, { rejectWithValue }) => {
    console.log("Total question count = " + totalQuestionCount + "test id = " + testId);
    try {
      const response = await axios.put(
        AXIOS_BASE_URL + `/tests/total-question-count`,
        null,
        {
          params: {
            testIds: testId, totalQuestionCounts: totalQuestionCount 
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
