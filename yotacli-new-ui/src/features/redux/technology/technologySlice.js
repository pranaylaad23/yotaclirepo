import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteTechnology,
  editTechnology,
  fetchTechnologies,
  fetchTechnologyById,
} from "./technologyAction";
import { fetchTechnology } from "./technologyAction";
import { createTechnology, fetchTechCategory, createTechCategory } from "./technologyAction";
const technologySlice = createSlice({
  name: "technology",
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
      state.techList.push(action.payload);
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
    .addCase(createTechCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createTechCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.createTechCategoryData = action.payload;
    })
    .addCase(createTechCategory.rejected, (state, action) => {
      .addCase(deleteTechnology.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTechnology.fulfilled, (state, action) => {
        state.loading = false;
        state.technologyId = action.payload;
        let index = state.techList.findIndex(
          (ques) => ques.id === action.meta.arg
        );
        state.techList.splice(index, 1);
      })
      .addCase(deleteTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchTechnologyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTechnologyById.fulfilled, (state, action) => {
        state.loading = false;
        state.technologyId = action.payload;
      })
      .addCase(fetchTechnologyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addCase(editTechnology.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editTechnology.fulfilled, (state, action) => {
      state.loading = false;
      let index = state.techList.findIndex(
        (tech) => tech.id === action.meta.arg.technologyId
      );
      state.techList.splice(index, 1);
      state.techList.push(action.payload);
    });
    builder.addCase(editTechnology.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default technologySlice.reducer;
