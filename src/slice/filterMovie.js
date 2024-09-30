import { createSlice } from "@reduxjs/toolkit";

const filterMovie = createSlice({
  name: "singleMovie",
  initialState: {
    filteredMovie: null,
  },
  reducers: {
    setFilteredMovie: (state, action) => {
      state.filteredMovie = action.payload;
    },
    resetFilteredMovie: (state) => {
      state.filteredMovie = null;
    },
  },
});
 export const {setFilteredMovie, resetFilteredMovie} = filterMovie.actions
 export default filterMovie.reducer;