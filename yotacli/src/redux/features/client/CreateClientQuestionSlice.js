import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const createClientQuestion = createAsyncThunk(
    "clientQuestion",
    async (data, { rejectedWithValue }) => {
     
      const response = await fetch(
        "http://localhost:9090/yota/api/clientQuestion/createQuestion/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
      
        return result;
      } catch (error) {
        return rejectedWithValue(error);
      }
    }
  );
export default createClientQuestion.reducer;
