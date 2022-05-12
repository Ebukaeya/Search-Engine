import { createSlice } from "@reduxjs/toolkit";

let initailJobs = {
  jobs: [],
};

const favouriteJobSlice = createSlice({
  name: "favouriteJob",
  initialState: initailJobs,
  reducers: {
    addFavouriteJob: (state, action) => {
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    },
    removeFavouriteJob: (state, action) => {

      return {
        ...state,
        jobs: state.jobs.filter((job, i) => job._id !== action.payload),
      };
    },
  },
});

export default favouriteJobSlice.reducer;
export const { addFavouriteJob, removeFavouriteJob } =
  favouriteJobSlice.actions;

/*    */