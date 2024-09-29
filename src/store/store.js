import { configureStore } from "@reduxjs/toolkit";
import slice from "../slice/slice";

const store = configureStore({
  reducer: {
    redux: slice,
  },
});

export default store;
