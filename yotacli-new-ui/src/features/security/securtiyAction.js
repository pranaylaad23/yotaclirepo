import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "security/registeruser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      debugger;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `/yota-api/users/register`,
        { username, password },
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
        `/yota-api/users/authenticate`,
        { username, password },
        config
      );
      localStorage.setItem("jwtToken", data.authToken);
      const role = data.userRole;
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
