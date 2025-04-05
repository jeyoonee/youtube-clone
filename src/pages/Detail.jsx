import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchVideoById,
  fetchCommentsByVideoId,
  fetchPopularVideos,
} from "../api";
import DetailVideo from "../components/DetailVideo";
import DetailPopularVideo from "../components/DetailPopularVideo";
import Comment from "../components/Comment";

export default function Detail() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [sideVideos, setSideVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const shuffle = (array) => {
    const result = [...array];
    for (let i = 0; i < result.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [videoData, commentData, popularData] = await Promise.all([
          fetchVideoById(videoId),
          fetchCommentsByVideoId(videoId),
          fetchPopularVideos(),
        ]);
        setVideo(videoData);
        setComments(commentData);
        setSideVideos(shuffle(popularData));
      } catch (err) {
        console.error(err);
        setError("데이터를 불러오는 데 실패했어요 😢");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [videoId]);

  return (
    <div className="flex flex-col lg:flex-row p-6 m-auto justify-center max-w-[100vw] overflow-x-hidden min-h-screen">
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <>
          <div className="flex flex-col w-full lg:w-[60vw] lg:max-w-[960px] lg:mr-4 lg:basis-2/3">
            {/* 비디오  */}
            <DetailVideo video={video} />
            {/* 댓글 */}
            <div className="text-white order-3 lg:order-2">
              <div className="font-bold text-[20px] text-[#F1F1F1] mt-3 mb-6 ">
                {Number(video?.statistics.commentCount)?.toLocaleString()}{" "}
                Comments
              </div>
              {comments?.length > 0
                ? comments.map((comment) => (
                    <Comment key={comment.id} comment={comment.snippet} />
                  ))
                : ""}
            </div>
          </div>

          {/* 인기 동영상 */}
          <div className="order-2 lg:order-3 lg:basis-1/3 lg:max-w-[400px]">
            {sideVideos.map((video) => (
              <DetailPopularVideo key={video.id} video={video} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
