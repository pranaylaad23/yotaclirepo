import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  postedQuestion: null,
  loading: false,
  error: null,
};

const postQuestion = createAsyncThunk(
  "questions/postQuestion",
  async (questionData) => {
    try {
      const token = localStorage.getItem("jwtToken");

      if (!token) {
        throw new Error("JWT token not found in localStorage");
      }

      const response = await fetch(
        "http://localhost:8080/yota-api/questions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(questionData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post question");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.postedQuestion = action.payload;
    });
    builder.addCase(postQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export { postQuestion };
export default questionSlice.reducer;
