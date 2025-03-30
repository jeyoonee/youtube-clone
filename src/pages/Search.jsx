import { useEffect, useState } from "react";
import { fetchVideosByKeyword } from "../api";
import SearchVideo from "../Components/SearchVideo";
import searchedData from "../data/searchedData.json";

export default function Search() {
  const keyword = window.location.pathname.split("/")[2];

  // const [videos, setVideos] = useState([]);
  // setVideos(searchedData);
  const videos = searchedData.filter((el) => el.id.kind === "youtube#video");

  // TODO: 목업데이터로 개발 후 API 적용하기
  // useEffect(() => {
  //   const getVideos = async () => {
  //     try {
  //       const data = await fetchVideosByKeyword(keyword);
  //       console.log(data);
  //       setVideos(data);
  //     } catch (err) {
  //       console.error("Error fetching videos:", err);
  //     }
  //   };
  //   getVideos();
  // }, [keyword]);

  return (
    <div>
      {videos.map((video) => (
        <SearchVideo key={video.etag} video={video.snippet} />
      ))}
    </div>
  );
}
