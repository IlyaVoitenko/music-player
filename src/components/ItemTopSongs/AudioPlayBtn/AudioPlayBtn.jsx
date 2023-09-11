import React from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { idSelectedSongSelector } from "../../../store/selectors";
import { handlePlayPauseMusic } from "../../../utils/helpers/player";
import { useDispatch, useSelector } from "react-redux";

const AudioPlayBtn = ({ pathSong, idItem }) => {
  const dispatch = useDispatch();
  const idSelectedSong = useSelector(idSelectedSongSelector);
  return (
    <div
      onClick={() => {
        handlePlayPauseMusic(dispatch, idItem, pathSong, idSelectedSong);
      }}
    >
      <span>
        {idSelectedSong === idItem ? <BsPauseFill /> : <BsPlayFill />}
      </span>
    </div>
  );
};

export default AudioPlayBtn;
