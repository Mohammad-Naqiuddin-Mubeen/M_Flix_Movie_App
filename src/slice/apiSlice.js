import { createSlice } from "@reduxjs/toolkit";
import apiCall from "../apiCall/apiCall";

const apiSlice = createSlice({
  name: "redux",
  initialState: {
    isLoading: false,
    result: {},
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(apiCall.pending, (state, action) => {
      state.isLoading = false;
      state.result = {};
      state.isError = false;
    });

    builder.addCase(apiCall.fulfilled, (state, action) => {
      state.isLoading = true;
      state.result = action.payload;
      state.isError = false;
    });

    builder.addCase(apiCall.rejected, (state, action) => {
      state.isLoading = true;
      state.result = {};
      state.isError = true;
    });
  },
});

export default apiSlice.reducer;
