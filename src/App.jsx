import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { setTopSongs } from "./store/thunk";
import ListTopSongs from "./components/ListTopSongs";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTopSongs());
  }, []);
  return (
    <>
      <ListTopSongs />
    </>
  );
}

export default App;
