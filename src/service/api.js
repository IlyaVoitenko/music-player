import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const RAPID_API_HOST = import.meta.env.VITE_RAPID_API_HOST;

export const getTopSongs = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}artists/get-top-songs`,
    params: {
      id: "567072",
      l: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": `${RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${RAPID_API_HOST}`,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    return error;
  }
};
