import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { fetchVideosByKeyword } from "../api";
import SearchVideo from "../components/SearchVideo";

export default function Search() {
  const location = useLocation();
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const data = await fetchVideosByKeyword(keyword);
        const filteredData = data?.filter(
          (el) => el.id.kind === "youtube#video"
        );
        setVideos(filteredData);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getVideos();
  }, [keyword]);

  return (
    <div className="p-6 flex flex-col bg-black">
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : videos.length === 0 ? (
        <p className="text-white">No results found</p>
      ) : (
        videos.map((video) => <SearchVideo key={video.etag} video={video} />)
      )}
    </div>
  );
}
