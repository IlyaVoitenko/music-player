import {
  setPathMedia,
  setIdSelectedSong,
  setIsPlayMusic,
} from "../../../store/reducer/songs";

export const handlePlayPauseMusic = (
  dispatch,
  idItem,
  pathSong,
  idSelectedSong
) => {
  if (idSelectedSong === "") {
    dispatch(setPathMedia(pathSong));
    dispatch(setIsPlayMusic());
    return dispatch(setIdSelectedSong(idItem));
  } else {
    dispatch(setIsPlayMusic());
    return dispatch(setIdSelectedSong(""));
  }
};
export const handleReactAudioPlayer = (audioPlayer, isPlayMusic) => {
  if (audioPlayer) {
    if (isPlayMusic) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
};
