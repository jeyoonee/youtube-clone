import HomeVideo from "../Components/HomeVideo";
import homeData from "../data/homeData.json";

export default function Home() {
  return (
    <div>
      {homeData.map((video) => (
        <HomeVideo key={video.id} video={video.snippet} />
      ))}
    </div>
  );
}
