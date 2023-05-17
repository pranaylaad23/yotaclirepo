import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create bach
export const createTech = createAsyncThunk(
  "createtech",
  async (data, { rejectedWithValue }) => {
    console.log("Create Tech: ", data);
    const response = await fetch(
      "http://localhost:9090/yota/api/technologies/",
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
// // update
// export const UpdateTech = createAsyncThunk(
//   "updateTech",
//   async ({ name, data }, { rejectedWithValue }) => {
//     const response = await fetch(
//       `http://localhost:9090/yota/api/technologies/`,
//       { mode: "cors" },
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectedWithValue(error);
//     }
//   }
// );
export const UpdateTech = createAsyncThunk(
  "updateBatch",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      alert(id);

      axios
        .put(`http://localhost:9090/yota/api/technologies/`, data)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete
export const deleteTechnology = createAsyncThunk(
  "deleteAssociate",
  async (id, { rejectWithValue }) => {
    if (window.confirm("Do you want to remove"))
      try {
        const response = await fetch(
          `http://localhost:9090/yota/api/technologies/${id}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
          alert("Removed Succesfully");
          window.location.reload();
        });

        const result = await response.json();

        return result;
      } catch (error) {
        console.log(error);

        return rejectWithValue(error.response.data);
      }
  }
);
export const techCreate = createSlice({
  name: "techCreate",
  initialState: {
    batch: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    // create
    [createTech.pending]: (state) => {
      state.loading = true;
    },

    [createTech.fulfilled]: (state, action) => {
      state.loading = false;
      state.technology = [action.payload];
    },

    [createTech.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Data
    [UpdateTech.pending]: (state) => {
      state.loading = true;
    },
    [UpdateTech.fulfilled]: (state, action) => {
      state.loading = false;
      state.batch = state.batch.map((ele) =>
        ele.name === action.payload.name ? action.payload : ele
      );
    },
    [UpdateTech.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete
    [deleteTechnology.pending]: (state) => {
      state.loading = true;
    },
    [deleteTechnology.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.associate = state.associate.filter(
          (associate) => associate.id !== id
        );
      }
    },

    [deleteTechnology.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default techCreate.reducer;
