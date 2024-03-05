import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createClient = createAsyncThunk(
  "client/createClient",
  async (formData, { rejectWithValue }) => {
    const Token = localStorage.getItem("jwtToken");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      };
      await axios.post("/yota-api/clients/", formData, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const fetchClients = createAsyncThunk(
  "client/getClients",
  async (formData, { rejectWithValue }) => {
    const Token = localStorage.getItem("jwtToken");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      };
      await axios.get("/yota-api/clients/", formData, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
