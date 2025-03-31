import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchVideoById } from "../api";
import DetailVideo from "../Components/DetailVideo";
import DetailPopularVideo from "../Components/DetailPopularVideo";
import popularVideos from "../data/popularVideos.json";
import commentsData from "../data/commentsData.json";
import Comment from "../Components/Comment";

export default function Detail() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [sideVideos, setSideVideos] = useState(popularVideos);
  const [comments, setComments] = useState(null);

  const shuffle = (array) => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setSideVideos(shuffle(popularVideos));

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
    <div className="flex p-5 justify-between">
      <div className="flex flex-col">
        {error && <p className="text-red-500">{error}</p>}
        <div>{video ? <DetailVideo video={video} /> : <p>Loading...</p>}</div>
        <div className="bg-blue">
          {/* 댓글 */}
          <span className="font-bold text-lg">
            {video?.statistics.commentCount} Comments
          </span>
          {commentsData.map((comment) => (
            <Comment key={comment.id} comment={comment.snippet} />
          ))}
        </div>
      </div>
      <div>
        {sideVideos.map((video) => (
          <DetailPopularVideo key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
