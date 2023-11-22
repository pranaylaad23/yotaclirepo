import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken, headerContents } from "../../../components/utils/Authentication";

const headerContent = headerContents();
//create associate
export const createAssociate = createAsyncThunk(
  "createAssociate",
  async (data, { rejectedWithValue }) => {
    console.log("Create Associate: ", data);
    const response = await fetch(
      "http://localhost:9090/yota/api/associates/",
      {
        method: "POST",
        headers: headerContent,
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

//update
export const UpdateAsso = createAsyncThunk(
  "UpdateAsso",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      alert(id);

      axios
        .put(`http://localhost:9090/yota/api/associates/`, data,{
          headers: headerContent
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAssociate = createAsyncThunk("associate", () => {
  return axios
    .get(`http://localhost:9090/yota/api/associates/all`,{
      headers: headerContent
    })
    .then((response) => response.data.map((associate) => associate));
});

// //delete
// export const deleteAssociate = createAsyncThunk(
//   "deleteAssociate",
//   async (id, { rejectWithValue }) => {
//     if (window.confirm("Do you want to remove"))
//       try {
//         const response = await fetch(
//           `http://localhost:9090/yota/api/associates/${id}`,
//           {
//             method: "DELETE",
//           }
//         ).then((res) => {
//           alert("Removed Succesfully");
//           window.location.reload();
//         });

//         const result = await response.json();

//         return result;
//       } catch (error) {
//         console.log(error);

//         return rejectWithValue(error.response.data);
//       }
//   }
// );

// Get Test Number API
export const fetchAssociateTestNumber = createAsyncThunk("associateTestNumber", async () => {
  return axios
    .get(`http://localhost:9090/yota/api/associates/tests`,{
      headers:headerContent
    })
    .then((response) => response.data);
});

// Get Test Deatils of Technology API
export const fetchAssociateTestDetails = createAsyncThunk("fetchAssociateTestDetails", async (name) => {
  return axios
    .get(`http://localhost:9090/yota/api/associates/tests/${name}`,{
      headers:headerContent
    })
    .then((response) => response.data);
});

export const associateList = createSlice({
  name: "associateList",
  initialState: {
    associates: [],
    searchAssociate: [],
    testNumberArray: [],
    testDetailsArray:[],
    loading: false,
    error: null,
  },

  reducers: {
    handleSearchAsso: (state, action) => {
      state.searchAssociate = [];
      state.searchAssociate.push(action.payload)
    },
  },

  extraReducers: {

    // create
    [createAssociate.pending]: (state) => {
      state.loading = true;
    },

    [createAssociate.fulfilled]: (state, action) => {
      state.loading = false;
      state.associate = [action.payload];
    },

    [createAssociate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchAssociate.pending]: (state) => {
      state.loading = true;
    },

    [fetchAssociate.fulfilled]: (state, action) => {
      state.loading = false;
      state.associates = action.payload;
    },

    [fetchAssociate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get
    [fetchAssociate.pending]: (state) => {
      state.loading = true;
      // state.searchError = false;
    },

    [fetchAssociate.fulfilled]: (state, action) => {
      state.loading = false;
      // state.searchError = false;
      state.associates = action.payload;
      state.searchAssociate = action.payload;
    },

    [fetchAssociate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Data
    [UpdateAsso.pending]: (state) => {
      state.loading = true;
    },
    [UpdateAsso.fulfilled]: (state, action) => {
      state.loading = false;
      state.batch = state.batch.map((ele) =>
        ele.name === action.payload.name ? action.payload : ele
      );
    },
    [UpdateAsso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete
    // [deleteAssociate.pending]: (state) => {
    //   state.loading = true;
    // },
    // [deleteAssociate.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   const { id } = action.payload;
    //   if (id) {
    //     state.associate = state.associate.filter(
    //       (associate) => associate.id !== id
    //     );
    //   }
    // },

    // [deleteAssociate.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },

    //get Test Number
    [fetchAssociateTestNumber.pending]: (state) => {
      state.loading = true;
      // state.searchError = false;
      console.log("in List Associate Slice.js", state.testNumberArray);
    },

    [fetchAssociateTestNumber.fulfilled]: (state, action) => {
      state.loading = false;
      // state.searchError = false;
      state.testNumberArray = [action.payload];
      // state.searchTech = action.payload;
      console.log("in List Associate Slice.js",state.testNumberArray);
    },

    [fetchAssociateTestNumber.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get Test Details
    [fetchAssociateTestDetails.pending]: (state) => {
      state.loading = true;
      // state.searchError = false;
    },

    [fetchAssociateTestDetails.fulfilled]: (state, action) => {
      state.loading = false;
      // state.searchError = false;
      state.testDetailsArray = [action.payload];
      // state.searchAssociate = action.payload;
      console.log("in List Associate Slice.js",state.testDetailsArray);
    },

    [fetchAssociateTestDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const { handleSearchAsso } = associateList.actions;
export default associateList.reducer;
