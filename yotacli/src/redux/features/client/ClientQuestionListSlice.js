import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../../components/utils/Authentication";
//NEW 
export const fetchClientQuestion = createAsyncThunk("clientQuestion",async (clientId) => {
  const token = getAuthToken();
    return axios
      .get(`http://localhost:9090/yota/api/clientQuestion/${clientId}`,{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token
        },
      })
      .then(response =>  response.data)
      .catch(error=>console.log("ERROR"))
  });
  
  export const clientQuestionsList = createSlice({
    name: "clientList",
    initialState: {
      clientQuestions: [],
      loading: false,
      error: null,
    },
    extraReducers: {
      [fetchClientQuestion.pending]: (state) => {
        state.loading = true;
      },
  
      [fetchClientQuestion.fulfilled]: (state, action) => {
        state.loading = false;
        state.clientQuestions = action.payload;
        console.log("slice"+action.payload)
      },
  
      [fetchClientQuestion.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  export default clientQuestionsList.reducer;