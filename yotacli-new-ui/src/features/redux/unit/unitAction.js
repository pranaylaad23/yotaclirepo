import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 
export const createUnit = createAsyncThunk(
  "unit/CreateUnitForm",
  async (formData, { rejectWithValue }) => {
    const token = localStorage.getItem("jwtToken");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      await axios.post(`/yota-api/units/`, formData, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const postUnits = createAsyncThunk(
  "units/postunits",
  async ({ newUnit }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
 
      const response = await axios.post(`/yota-api/units/`, newUnit, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 
export const fetchUnits = createAsyncThunk(
  "units/fetchUnits",
 
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const response = await axios.get(`/yota-api/units/`, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 