import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTopSongs } from "../../store/thunk";
import {
  isLoadingSelector,
  isShowAudioPlayerSelector,
} from "../../store/selectors";

import ListTopSongs from "../ListTopSongs";
import AudioPlayer from "../AudioPlayer";

const Music = () => {
  const dispatch = useDispatch();
  const isLoadng = useSelector(isLoadingSelector);
  const isShowAudioPlayer = useSelector(isShowAudioPlayerSelector);

  useEffect(() => {
    dispatch(setTopSongs());
  }, []);

  return (
    <div>
      {isLoadng && <span>loading ...</span>}
      {!isLoadng && <ListTopSongs />}
      {isShowAudioPlayer && <AudioPlayer />}
    </div>
  );
};

export default Music;
