import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../../components/utils/Authentication";

// export const fetchData = createAsyncThunk("technology", async () => {
//     return axios
//       .get(`http://localhost:9090/yota/api/technologies/`)
//       .then((response) => response.data.map((technology) => technology  ));

//   });

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const token = getAuthToken();
  const response = await axios.get(`http://localhost:9090/yota/api/technologies/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    }
  });
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "idle",
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.data = action.payload;
      })

      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default dataSlice.reducer;
