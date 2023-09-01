import { configureStore } from "@reduxjs/toolkit";
import singsReducer from "./reducer/songs";

export const store = configureStore({
  reducer: {
    songs: singsReducer,
  },
});

export default store;
