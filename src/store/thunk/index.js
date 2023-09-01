import { getTopSongs } from "../../service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setTopSongs = createAsyncThunk(
  "songs/setTopSongs",
  async (_, apiThunk) => {
    try {
      const { data } = await getTopSongs();
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
