import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiCall = createAsyncThunk("redux", async () => {
  return await axios.get("http://localhost:3000/movies");
});

export default apiCall;
