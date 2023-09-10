import { createSlice } from "@reduxjs/toolkit";
import { setTopSongs } from "../../thunk";
const initialState = {
  topSongs: [],
  isError: false,
  isLoading: false,
  pathMedia: "",
  isShowAudioPlayer: false,
  idSelectedSong: "",
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setIdSelectedSong: (state, action) => {
      state.idSelectedSong = action.payload;
    },
    setPathMedia: (state, action) => {
      state.pathMedia = action.payload;
      state.isShowAudioPlayer = true;
    },
  },
  extraReducers: {
    [setTopSongs.fulfilled]: (state, action) => {
      state.topSongs = action.payload;
      state.isLoading = false;
    },
    [setTopSongs.pending]: (state) => {
      state.isLoading = true;
    },
    [setTopSongs.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setPathMedia, setIdSelectedSong } = songsSlice.actions;

export default songsSlice.reducer;
