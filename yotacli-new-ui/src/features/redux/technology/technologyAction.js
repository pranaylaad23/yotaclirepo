import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customToast } from "../../../components/common/toast/customToast";

export const fetchTechnologies = createAsyncThunk(
  "technology/fetchTechnologies",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.get("/yota-api/technologies/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createTechnology = createAsyncThunk(
  "technology/createTechnology",

  async (formData, { rejectWithValue }) => {
    const Token = localStorage.getItem("jwtToken");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      };
      const response = await axios.post(
        "/yota-api/technologies/",
        formData,
        config
      );
      if (response.status === 200) {
        customToast({
          message: `${"Technology added successfully"}`,
          autoClose: 2000,
          type: "success",
        });
      }
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const fetchTechnology = createAsyncThunk(
  "technology/fetchTechnology",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const response = await axios.get(`/yota-api/technologies/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
