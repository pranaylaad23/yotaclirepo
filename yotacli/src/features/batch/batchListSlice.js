import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create bach
// export const createBatch = createAsyncThunk("createBatch", async (data, { rejectWithValue }) => {

//     const response = await fetch("http://localhost:3030/batch", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     });

//     try {
//         const result = await response.json();
//         return result;
//     }
//     catch (error) {
//         return rejectWithValue(error);
//     }
// })
//show batch details

export const showBatch = createAsyncThunk(
  "batch/showBatch",
  async ({ rejectWithValue }) => {
    const response = await fetch(`http://localhost:9090/yota/api/batches/`);

    console.log(response);

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

console.log(showBatch());

export const batchList = createSlice({
  name: "batch",
  initialState: {
    batch: [],
    loading: false,
    error: null,

    extraReducers: {
      // [createBatch.pending]: (state) => {
      //     state.loading = true;
      // },

      // [createBatch.fulfilled]: (state, action) => {
      //     state.loading = false;
      //     state.batch.push(action.payload);
      // },

      // [createBatch.rejected]: (state, action) => {
      //     state.loading = false;
      //     state.error = action.payload;
      // },

      [showBatch.pending]: (state, action) => {
        state.loading = true;
      },

      [showBatch.fulfilled]: (state, action) => {
        state.loading = false;
        state.batch = action.payload;
      },

      [showBatch.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  },
});
export default batchList.reducer;
