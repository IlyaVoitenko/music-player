import React from "react";
import ItemTopSongs from "../ItemTopSongs";
import { useSelector } from "react-redux";
import { topSongsListSelector } from "../../store/selectors";

const ListTopSongs = () => {
  const listTopSongs = useSelector(topSongsListSelector);
  return (
    <div>
      {listTopSongs.map((song) => {
        return <ItemTopSongs key={song.id} song={song.attributes} />;
      })}
    </div>
  );
};

export default ListTopSongs;
