import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchVideosByKeyword } from "../api";
import SearchVideo from "../components/SearchVideo";

export default function Search() {
  const { keyword } = useParams();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", keyword],
    queryFn: async () => {
      const data = await fetchVideosByKeyword(keyword);
      return data?.filter((el) => el.id.kind === "youtube#video");
    },
  });

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Something went wrong 😖</p>;

  return (
    <div className="p-6 flex flex-col bg-black">
      {videos.length === 0 ? (
        <p className="text-white text-center mt-10">
          No results found for "<span className="font-bold">{keyword}</span>"
        </p>
      ) : (
        videos.map((video) => <SearchVideo key={video.etag} video={video} />)
      )}
    </div>
  );
}
