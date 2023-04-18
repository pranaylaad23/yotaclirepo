
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create bach
export const createBatch = createAsyncThunk("batch/createBatch", async ({ values }, { rejectWithValue }) => {

    const response = await fetch(`http://localhost:3030/batches/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                batchIdentifier: values.batchIdentifier,
                batchName:values.batchName,
                batchDescription:values.batchDescription,
                startDate:values.startDate,
                endDate:values.endDate
            }

        )
    });

    try {
        const result = await response.json();
        return result;
    }
    catch (error) {
        return rejectWithValue(error);
    }
})




export const createBatchSlice = createSlice({

    name: "batch",
    initialState: {
        batch: [],
        loading: false,
        error: null,


        extraReducers: {

            [createBatch.pending]: (state) => {
                state.loading = true;
            },

            [createBatch.fulfilled]: (state, action) => {
                state.loading = false;
                state.batch =[action.payload];
            },

            [createBatch.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },


        }
    },


})
export default createBatch.reducer;