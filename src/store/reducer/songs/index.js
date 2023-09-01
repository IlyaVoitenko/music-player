import { createSlice } from "@reduxjs/toolkit";
import { setTopSongs } from "../../thunk";
const initialState = {
  topSongs: [],
  isError: false,
  isLoading: false,
  isPlay: false,
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setIsPlay: (state) => {
      state.isPlay = !state.isPlay;
    },
  },
  extraReducers: {
    [setTopSongs.fulfilled]: (state, action) => {
      state.topSongs = action.payload;
      state.isLoading = false;
    },
    [setTopSongs.panding]: (state) => {
      state.isLoading = true;
    },
    [setTopSongs.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsPlay } = songsSlice.actions;

export default songsSlice.reducer;
