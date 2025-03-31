import HomeVideo from "../Components/HomeVideo";
import popularVideos from "../data/popularVideos.json";

export default function Home() {
  return (
    <div>
      {popularVideos.map((video) => (
        <HomeVideo key={video.id} video={video} />
      ))}
    </div>
  );
}
