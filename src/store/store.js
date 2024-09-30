import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slice/apiSlice";
import filterMovie from "../slice/filterMovie";

const store = configureStore({
  reducer: {
    redux: apiSlice,
    filter : filterMovie,
  },
});

export default store;
