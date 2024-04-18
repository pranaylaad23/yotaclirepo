import {createSlice} from "@reduxjs/toolkit";
import {fetchAllAssociates, fetchAllPendingAssociates} from "./associateAction";

const initialState = {
    associates: [],
    loading: false,
    error: null,
    success: false,
}

const associateSlice = createSlice({
    name: 'associates',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //fetching all associates
        builder.addCase(fetchAllAssociates.pending, (state) => {
            state.loading = true;
            state.associates = [];
            state.success = false;
            state.error = null;
        });
        builder.addCase(fetchAllAssociates.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.associates = action.payload;
        });
        builder.addCase(fetchAllAssociates.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.associates = [];
        });
        //fetching all pending associates
        builder
            .addCase(fetchAllPendingAssociates.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
                state.associates = [];
            })
            .addCase(fetchAllPendingAssociates.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.associates = action.payload;
            })
            .addCase(fetchAllPendingAssociates.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
                state.associates = [];
            })
        ;
    }
});

export default associateSlice.reducer;
