import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchVideoById } from "../api";
import DetailVideo from "../Components/DetailVideo";

export default function Detail() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const data = await fetchVideoById(videoId);
        setVideo(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("동영상을 불러오는 데 실패했어요 😢");
      }
    };
    getVideo();
  }, [videoId]);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {video ? <DetailVideo video={video} /> : <p>Loading...</p>}
    </div>
  );
}
