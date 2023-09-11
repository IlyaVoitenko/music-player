import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { handleReactAudioPlayer } from "../../utils/helpers/player";
import { pathMediaSelector, isPlayMusicSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const pathMedia = useSelector(pathMediaSelector);
  const isPlayMusic = useSelector(isPlayMusicSelector);

  useEffect(() => {
    const audioPlayer = document.getElementsByTagName("audio")[0];
    handleReactAudioPlayer(audioPlayer, isPlayMusic);
  }, [isPlayMusic]);

  return <ReactAudioPlayer src={pathMedia} controls />;
};

export default AudioPlayer;
