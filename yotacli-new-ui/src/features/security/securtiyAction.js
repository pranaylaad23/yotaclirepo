import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:8080";

export const registerUser = createAsyncThunk(
  "security/registeruser",
  async (
    { username, fullName, password, confirmPassword },
    { rejectWithValue }
  ) => {
    try {
      debugger;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/yota-api/users/register`,
        { username, fullName, password, confirmPassword },
        config
      );
    } catch (error) {
      //return custom error message from backend if present
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "security/loginuser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      //Configure header's Content type as json
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      debugger;
      const { data } = await axios.post(
        `${backendURL}/yota-api/users/authenticate`,
        { username, password },
        config
      );
      console.log("loginUser->data", data);
      //store user's token in local storage
      localStorage.setItem("jwtToken", data.authToken);

      return data;
    } catch (error) {
      //return custom error message from API if any
      if (error.response) {
        return rejectWithValue(error.response);
      }
    }
  }
);
