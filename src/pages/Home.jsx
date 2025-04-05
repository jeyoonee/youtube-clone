import HomeVideo from "../components/HomeVideo";
import { fetchPopularVideos } from "../api";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchPopularVideos();

        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("동영상을 불러오는 데 실패했어요 😢");
      }
    };
    getVideos();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-black">
      {videos.map((video) => (
        <HomeVideo key={video.id} video={video} />
      ))}
    </div>
  );
}
