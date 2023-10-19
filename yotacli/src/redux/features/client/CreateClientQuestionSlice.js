import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createClientQuestion = createAsyncThunk(
    "clientQuestion",
    async (data, { rejectedWithValue }) => {
      console.log("Create createClientQuestion--: ", data);
      const response = await fetch(
        "http://localhost:9090/yota/api/createQuestion/",
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
        console.log(result);
        return result;
      } catch (error) {
        return rejectedWithValue(error);
      }
    }
  );


export const clientQuestionList = createSlice({
  name: "clientQuestionList",
  initialState: {
    clientQuestions: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createClientQuestion.pending]: (state) => {
      state.loading = true;
    },

    [createClientQuestion.fulfilled]: (state, action) => {
      state.loading = false;
      state.clientQuestions = action.payload;
      console.log(action.payload)
    },

    [createClientQuestion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default clientQuestionList.reducer;
