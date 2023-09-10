import { setPathMedia, setIdSelectedSong } from "../../../store/reducer/songs";

export const handlePlayPauseMusic = (
  dispatch,
  idItem,
  pathSong,
  idSelectedSong
) => {
  if (idSelectedSong === "") {
    dispatch(setPathMedia(pathSong));
    return dispatch(setIdSelectedSong(idItem));
  } else {
    dispatch(setPathMedia(""));
    return dispatch(setIdSelectedSong(""));
  }
};
