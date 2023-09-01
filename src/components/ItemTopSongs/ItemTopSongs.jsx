import React from "react";

const ItemTopSongs = ({ song }) => {
  console.log(song.attributes.previews[0].url);
  return (
    <audio controls>
      <source src={song.attributes.previews[0].url} />
    </audio>
  );
};

export default ItemTopSongs;
