import React from "react";
import style from "./NameArtistSong.module.css";
const NameArtistSong = ({ artistName, nameSong }) => {
  return (
    <div className={style.container}>
      <span className={style.text}>{nameSong}</span>
      <span className={style.text}>{artistName}</span>
    </div>
  );
};

export default NameArtistSong;
