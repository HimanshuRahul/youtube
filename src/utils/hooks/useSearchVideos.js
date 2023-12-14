import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants";

const useSearchVideos = (searchkey) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos();
  }, [searchkey]);

  async function searchVideos() {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchkey);
      const json = await data.json();
      setVideos(json?.items);
      console.log(json);
    } catch (error) {
      console.error("something went wrong !!", error);
    }
  }
  return videos;
};

export default useSearchVideos;
