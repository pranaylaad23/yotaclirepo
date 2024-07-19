import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const storeResult = createAsyncThunk(
    "/questions/storeResult",
    async ({data},{ rejectWithValue}) => {
      try {
        console.log("data-api",data)
        const response = await axios.post(
          AXIOS_BASE_URL + `/add-result`,data
        );
        return response.data;
      } catch (error) {
        if (error) {
          return rejectWithValue(error.message);
        }
      }
    }
  );

  export const updateResult = createAsyncThunk(
    "/questions/updateResult",
    async ({data},{ rejectWithValue}) => {
      try {
        console.log("data-api",data)
        const response = await axios.put(
          AXIOS_BASE_URL + `/update-result`,data
        );
        return response.data;
      } catch (error) {
        if (error) {
          return rejectWithValue(error.message);
        }
      }
    }
  );

  export const updateTestStatus = createAsyncThunk(
    "/test/updateTestStatus",
    async (id,{ rejectWithValue}) => {
      try {
       
        const response = await axios.put(
          AXIOS_BASE_URL + `/tests/update/${id}`
          
        );
        return response.data;
      } catch (error) {
        if (error) {
          return rejectWithValue(error.message);
        }
      }
    }
  );