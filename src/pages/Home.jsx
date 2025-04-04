import HomeVideo from "../Components/HomeVideo";
import popularVideos from "../data/popularVideos.json";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-black">
      {popularVideos.map((video) => (
        <HomeVideo key={video.id} video={video} />
      ))}
    </div>
  );
}
