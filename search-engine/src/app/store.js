import { configureStore } from "@reduxjs/toolkit";
import favouriteJobRedcer from "../slice/favourite/favouriteJob.js";

export default configureStore({
  reducer: {
    favouriteJobs: favouriteJobRedcer,
  },
});
