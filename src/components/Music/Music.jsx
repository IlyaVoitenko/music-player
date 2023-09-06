import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTopSongs } from "../../store/thunk";
import { isLoadingSelector } from "../../store/selectors";

import ListTopSongs from "../ListTopSongs";
import AudioPlayer from "../AudioPlayer";

const Music = () => {
  const dispatch = useDispatch();
  const isLoadng = useSelector(isLoadingSelector);
  useEffect(() => {
    dispatch(setTopSongs());
  }, []);

  return (
    <div>
      {!isLoadng && <ListTopSongs />}
      {!isLoadng && <AudioPlayer />}
    </div>
  );
};

export default Music;
