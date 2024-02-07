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
      localStorage.setItem("jwtToken", data.authToken);
 
      // return data;
 
      // Extract the role from the response data
      const role = data.userRole;
 
      // Include the role in the payload
      return {
        ...data,
        role,
      };
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      }
    }
  }
);
 