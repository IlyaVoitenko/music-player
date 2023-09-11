import React from "react";
import style from "./ItemTopSongs.module.css";
import NameArtistSong from "./NameArtistSong";
import AudioPlayBtn from "./AudioPlayBtn";

const ItemTopSongs = ({ song, idItem }) => {
  return (
    <div className={style.container}>
      <AudioPlayBtn pathSong={song.previews[0].url} idItem={idItem} />
      <NameArtistSong artistName={song.artistName} nameSong={song.name} />
    </div>
  );
};

export default ItemTopSongs;
