import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customToast } from "../../../components/common/toast/customToast";
export const addAssociate = createAsyncThunk(
  "associates/addAssociate",
  async (formData, { rejectWithValue }) => {
    // const token = localStorage.getItem("jwtToken");
    try {
      const config = {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `${token}`,
        // },
      };
      await axios.post("/yota-api/associates/register", formData, config);
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchAssociates = createAsyncThunk(
  "associates/fetchAssociates",
  async (trainingData, { rejectWithValue }) => {
    try {
      // const token = localStorage.getItem("jwtToken");
      // console.log(token);
      // console.log("service getassociates of ID" + trainingData);

      const config = {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `${token}`,
        // },
      };
      const response = await axios.get(`/yota-api/newAssociates/`, config);
      console.log(response.data);
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

//assigned test to user by paritosh
export const fetchAssignedTests = createAsyncThunk(
  "associates/fetchAssignedTests",
  async (data, { rejectWithValue }) => {
    try {
      // const token = localStorage.getItem("jwtToken");
      // console.log(token);
      const config = {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `${token}`,
        // },
      };
      const response = await axios.get(`/yota-api/tests/assignedTests`, config);
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

//Upload excel file of list of associate by Vishal.Kanthariya
export const uploadExcel = createAsyncThunk(
  "excel/uploadExcel",
  async ({ id, file }, { rejectWithValue }) => {
    try {
      // const token = localStorage.getItem("jwtToken");
      const formData = new FormData();
      formData.append("id", id);
      formData.append("file", file);
      const config = {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        //   Authorization: `${token}`,
        // },
      };

      const response = await axios.post(
        `yota-api/newAssociates/bulkAddAssociates`,
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

export const fetchAssociatesOnCount = createAsyncThunk(
  "associates/fetchAssociates",
  async (id, { rejectWithValue }) => {
    try {
      // const token = localStorage.getItem("jwtToken");
      // console.log(token);
      console.log("service getassociates of ID" + id);

      const config = {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `${token}`,
        // },
      };
      const response = await axios.get(`/yota-api/newAssociates/${id}`, config);
      console.log(response.data);
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
