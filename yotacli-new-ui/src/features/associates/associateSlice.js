import {createSlice} from "@reduxjs/toolkit";
import {
    approvePendingAssociate,
    declinePendingAssociate,
    fetchAllAssociates,
    fetchAllAssociatesByStatus,
    fetchAllPendingAssociates,
    fetchRegisteredAssociates,
    fetchAllAssociatesTrainingsByEmailId
} from "./associateAction";

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
        //approve pending associate
        builder
            .addCase(approvePendingAssociate.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(approvePendingAssociate.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                let index = state.associates.findIndex(associate => associate.emailAdd === action.meta.arg);
                state.associates.splice(index, 1);
            })
            .addCase(approvePendingAssociate.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            })
        ;
        //decline pending associate
        builder
            .addCase(declinePendingAssociate.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(declinePendingAssociate.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                let index = state.associates.findIndex(associate => associate.emailAdd === action.meta.arg);
                state.associates.splice(index, 1);
            })
            .addCase(declinePendingAssociate.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            })
            //fetching all approved associates
        builder
        .addCase(fetchAllAssociatesByStatus.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
            state.associates = [];
        })
        .addCase(fetchAllAssociatesByStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.associates = action.payload;
        })
        .addCase(fetchAllAssociatesByStatus.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.associates = [];
        })
        ;
//fetching all training registered associates
        builder.addCase(fetchRegisteredAssociates.pending, (state) => {
            state.loading = true;
            state.associates = [];
            state.success = false;
            state.error = null;
        });
        builder.addCase(fetchRegisteredAssociates.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            console.log("???",action.payload);
            state.associates = action.payload;
        });
        builder.addCase(fetchRegisteredAssociates.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.associates = [];
        });
        builder.addCase(fetchAllAssociatesTrainingsByEmailId.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            //state.error = action.payload;
            state.associates = action.payload;
        });
        builder.addCase(fetchAllAssociatesTrainingsByEmailId.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.associates = [];
        });
        ;
    }
});

export default associateSlice.reducer;
