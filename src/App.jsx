import { useEffect } from "react";
import "./App.css";
import { getTopSongs } from "./service/api";

function App() {
  useEffect(() => {
    getTopSongs();
  }, []);
  return <></>;
}

export default App;
