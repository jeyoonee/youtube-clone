import { useParams } from "react-router";
import {
  fetchVideoById,
  fetchCommentsByVideoId,
  fetchPopularVideos,
} from "../api";
import DetailVideo from "../components/DetailVideo";
import DetailPopularVideo from "../components/DetailPopularVideo";
import Comment from "../components/Comment";
import { useQuery } from "@tanstack/react-query";

export default function Detail() {
  const { videoId } = useParams();
  const {
    data: video,
    isLoading: isVideoLoading,
    error: videoError,
  } = useQuery({
    queryKey: ["video", videoId],
    queryFn: () => fetchVideoById(videoId),
  });

  const {
    data: sideVideos,
    isLoading: isSideVideosLoading,
    error: sideVideosError,
  } = useQuery({
    queryKey: ["popularVideos"],
    queryFn: fetchPopularVideos,
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ["comments", videoId],
    queryFn: () => fetchCommentsByVideoId(videoId),
  });

  if (isVideoLoading || isSideVideosLoading || isCommentsLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (videoError || commentsError || sideVideosError) {
    return <p className="text-red-500">Something went wrong 😖</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-6 m-auto justify-center max-w-[100vw] overflow-x-hidden min-h-screen">
      <div className="flex flex-col w-full lg:w-[60vw] lg:max-w-[960px] lg:mr-4 lg:basis-2/3">
        {/* 비디오  */}
        <DetailVideo video={video} />
        {/* 댓글 */}
        <div className="text-white order-3 lg:order-2">
          <div className="font-bold text-[20px] text-[#F1F1F1] mt-3 mb-6 ">
            {Number(video?.statistics.commentCount)?.toLocaleString()} Comments
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
        {sideVideos?.length > 0 ? (
          sideVideos.map((video) => (
            <DetailPopularVideo key={video.id} video={video} />
          ))
        ) : (
          <p className="text-gray-400">No popular videos found.</p>
        )}
      </div>
    </div>
  );
}
