import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const addAssociate = createAsyncThunk(
 "associates/addAssociate",
 
 async (formData, { rejectWithValue }) => {
  const token=localStorage.getItem('jwtToken')
 
   try {
     const config = {
       headers: {
         "Content-Type": "application/json",
         "Authorization": `${token}`,
       },
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
 
 