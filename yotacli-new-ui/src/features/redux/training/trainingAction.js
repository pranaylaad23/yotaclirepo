import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customToast } from "../../../components/common/toast/customToast";

export const getTrainings = createAsyncThunk(
  "trainings/getTrainings",
  async (trainingData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.get(`/yota-api/trainings/`, config);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const requestTraining = createAsyncThunk(
  "training/requestTraining",
  async (trainingRequest, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const response = await axios.post(
        `/yota-api/trainings/`,
        trainingRequest,
        config
      );
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const addNominations = createAsyncThunk(
  "training/nominations",
  async (nominations, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      console.log(nominations);
      const response = await axios.post(
        `yota-api/nominations/`,
        nominations,
        config
      );

      return response.data;
    } catch (error) {
      customToast({
        message: `${error.response.data}`,
        autoClose: 2000,
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadExcel = createAsyncThunk(
  "excel/uploadExcel",
  async (file, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const formData = new FormData();
      formData.append("file", file);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(
        `yota-api/nominations/bulkNominations`,
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
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getTrainingsByStatus = createAsyncThunk(
  "trainings/getTrainingsByStatus",
  async (status, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };

      const response = await axios.get(
        `/yota-api/trainings/status/${status}`,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const uploadTrainingExcel = createAsyncThunk(
  "excel/uploadExcel",
  async (file, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const formData = new FormData();
      formData.append("file", file);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };

      const response = await axios.post(
        `yota-api/trainings/bulkUploadTrainings`,
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
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

