import { setPathMedia } from "../../../store/reducer/songs";

export const handlePlayPauseMusic = (dispatch, isPlay, setIsPlay, pathSong) => {
  if (isPlay) {
    dispatch(setPathMedia(""));
    return setIsPlay(false);
  } else {
    dispatch(setPathMedia(pathSong));
    return setIsPlay(true);
  }
};
