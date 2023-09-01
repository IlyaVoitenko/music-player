import React from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { setIsPlay } from "../../../store/reducer/songs";
import { useDispatch, useSelector } from "react-redux";
import { isPlaySelector } from "../../../store/selectors";

const AudioPlay = ({ pathSong }) => {
  const dispatch = useDispatch();
  const isPlay = useSelector(isPlaySelector);
  return (
    <div
      onClick={() => {
        console.log("object");
        dispatch(setIsPlay());
      }}
    >
      <span>{isPlay ? <BsPlayFill /> : <BsPauseFill />}</span>
    </div>
  );
};

export default AudioPlay;
