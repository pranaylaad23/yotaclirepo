
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create batch action
export const createBatch = createAsyncThunk("createbatch", async (data, { rejectWithValue }) => {

    const response = await fetch("http://localhost:9090/yota/api/batches/", {
      method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
       body: JSON.stringify(data)
    })

    try {
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error) {
        return rejectWithValue(error);
    }
})




export const batchCreate = createSlice({

    name: "batchCreate",
    initialState: {
        batch: [],
        loading: false,
        error: null,
    },

        extraReducers: {

        [createBatch.pending]: (state) => {
            state.loading = true;
        },

        [createBatch.fulfilled]: (state, action) => {
            state.loading = false;
            state.batch=[action.payload];
        }, 

        [createBatch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


    },


});
export default batchCreate.reducer;