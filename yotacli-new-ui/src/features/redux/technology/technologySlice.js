import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchTechnologies } from "./technologyAction";
import { fetchTechnology } from "./technologyAction";
import { createTechnology, fetchTechCategory, createTechCategory } from "./technologyAction";
const technologySlice = createSlice({
  name: "technology",
  name: "technologies",
  initialState: {
    techList: [],
    loading: false,
    error: null,
    techCategoryList: [],
    techCategoryLoading: false,
    techCategoryError: null,
    createTechCategoryData: null
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechnologies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTechnologies.fulfilled, (state, action) => {
        state.loading = false;
        state.techList = action.payload;
      })
      .addCase(fetchTechnologies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addCase(createTechnology.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createTechnology.fulfilled, (state, action) => {
      state.loading = false;
      state.technology = action.payload;
    });
    builder.addCase(createTechnology.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchTechnology.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTechnology.fulfilled, (state, action) => {
      state.loading = false;
      state.techList = action.payload;
    });
    builder.addCase(fetchTechnology.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder
    .addCase(fetchTechCategory.pending, (state) => {
      state.techCategoryLoading = true;
      state.techCategoryError = null;
    })
    .addCase(fetchTechCategory.fulfilled, (state, action) => {
      state.techCategoryLoading = false;
      state.techCategoryList = action.payload;
    })
    .addCase(fetchTechCategory.rejected, (state, action) => {
      state.techCategoryLoading = false;
      state.techCategoryError = action.error.message;
    });

    builder
    .addCase(createTechCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createTechCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.createTechCategoryData = action.payload;
    })
    .addCase(createTechCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default technologySlice.reducer;
