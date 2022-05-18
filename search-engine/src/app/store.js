import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteJobRedcer from "../slice/favourite/favouriteJob.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // <-- this is the localStorage engine
import { encryptTransform } from "redux-persist-transform-encrypt";

const reducers = combineReducers({
  favouriteJob: favouriteJobRedcer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: "idiot is your fucking name",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: {
    favouriteJobs: persistedReducer,
  },
});
