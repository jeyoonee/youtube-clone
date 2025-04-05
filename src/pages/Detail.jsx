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
    <div className="flex flex-col lg:flex-row p-6 m-auto justify-center max-w-[100vw] overflow-x-hidden min-h-screen">
      <div className="flex flex-col w-full lg:w-[60vw] lg:max-w-[960px] lg:mr-4 lg:basis-2/3">
        {/* 비디오  */}
        {error && <p className="text-red-500">{error}</p>}
        <div>{video ? <DetailVideo video={video} /> : <p>Loading...</p>}</div>
        {/* 댓글 */}
        <div className="text-white order-3 lg:order-2">
          <div className="font-bold text-[20px] text-[#F1F1F1] mt-3 mb-6 ">
            {Number(video?.statistics.commentCount)?.toLocaleString()} Comments
          </div>
          {commentsData.map((comment) => (
            <Comment key={comment.id} comment={comment.snippet} />
          ))}
        </div>
      </div>
      {/* 인기 동영상 */}
      <div className="order-2 lg:order-3 lg:basis-1/3 lg:max-w-[400px]">
        {sideVideos.map((video) => (
          <DetailPopularVideo key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
