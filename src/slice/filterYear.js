import { createSlice } from "@reduxjs/toolkit";

const filterYear = createSlice({
  name: "filterYear",
  initialState: {
    filterYear: 2015,
  },
  reducers: {
    setfilterYear: (state, action) => {
      state.filterYear = action.payload;
    },
    resetfilterYear: (state) => {
      state.filterYear = null;
    },
  },
});

export const { setfilterYear, resetfilterYear } = filterYear.actions;
export default filterYear.reducer;
