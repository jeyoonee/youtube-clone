import RelativeTime from "./RelativeTime";

export default function HomeVideo({ video }) {
  return (
    <div className="bg-black text-white mb-2 w-50 rounded-lg p-1">
      <img src={video.thumbnails.default.url} alt={video.title} />

      <h2>{video.title}</h2>
      <span>{video.channelTitle}</span>
      <RelativeTime isoDateString={video.publishedAt} />
    </div>
  );
}
