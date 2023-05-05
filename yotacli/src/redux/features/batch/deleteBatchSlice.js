import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const batchDelete = createAsyncThunk("deletebatch",async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove"))
        try {
            const response = await fetch(`http://localhost:9090/yota/api/batches/${id}`,
                {
                    method: "DELETE",
                }
            ).then((response) => {
                alert("Removed Succesfully");
                window.location.reload();
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
});

export const deleteBatch = createSlice({

    name: "deletebatch",
    initialState: {
        batch: [],
        loading: false,
        error: null,
    },

    extraReducers: {

        [batchDelete.pending]: (state) => {
            state.loading = true;
        },

        [batchDelete.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {

                state.batch = state.batch.filter((ele) => ele.id !== id );
            }

        },

        [batchDelete.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },


});

export default deleteBatch.reducer;