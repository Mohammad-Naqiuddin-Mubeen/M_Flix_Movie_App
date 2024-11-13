import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slice/apiSlice";
import filterMovie from "../slice/filterMovie";
import filterYear from "../slice/filterYear"
const store = configureStore({
  reducer: {
    redux: apiSlice,
    filter : filterMovie,
    year : filterYear,
  },
});

export default store;
