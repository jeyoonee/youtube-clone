import HomeVideo from "../components/HomeVideo";
import { fetchPopularVideos } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularVideos"],
    queryFn: fetchPopularVideos,
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh
  });

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Something went wrong 😖</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-black">
      {videos &&
        videos.map((video) => <HomeVideo key={video.id} video={video} />)}
    </div>
  );
}
