import React from "react";
import { pathMediaSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const pathMedia = useSelector(pathMediaSelector);
  return (
    <audio controls>
      <source src={pathMedia} type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer;
