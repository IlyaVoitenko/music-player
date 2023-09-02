import React from "react";
import style from "./ItemTopSongs.module.css";
import NameArtistSong from "./NameArtistSong";
import AudioPlay from "./AudioPlay";

const ItemTopSongs = ({ song, idItem }) => {
  return (
    <div className={style.container}>
      <AudioPlay pathSong={song.previews[0].url} idItem={idItem} />
      <NameArtistSong artistName={song.artistName} nameSong={song.name} />
    </div>
  );
};

export default ItemTopSongs;
