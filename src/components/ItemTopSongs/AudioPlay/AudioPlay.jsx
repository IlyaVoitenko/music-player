import React, { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { handlePlayPauseMusic } from "../../../utils/helpers/player";
import { useDispatch } from "react-redux";

const AudioPlay = ({ pathSong }) => {
  const dispatch = useDispatch();
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div
      onClick={() =>
        handlePlayPauseMusic(dispatch, isPlay, setIsPlay, pathSong)
      }
    >
      <span>{isPlay ? <BsPauseFill /> : <BsPlayFill />} </span>
    </div>
  );
};

export default AudioPlay;
