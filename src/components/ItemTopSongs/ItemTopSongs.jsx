import React from "react";
import style from "./ItemTopSongs.module.css";
import NameArtistSong from "./NameArtistSong";
import AudioPlay from "./AudioPlay";

const ItemTopSongs = ({ song }) => {
  console.log(song.previews[0].url);
  console.log(song.artistName);
  return (
    <div className={style.container}>
      <AudioPlay pathSong={song.previews[0].url} />
      <NameArtistSong artistName={song.artistName} nameSong={song.name} />
    </div>
  );
};

export default ItemTopSongs;
