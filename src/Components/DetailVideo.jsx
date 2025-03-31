import RelativeTime from "./RelativeTime";

export default function DetailVideo({ video }) {
  return (
    <div className="bg-black text-white mb-2 w-50 rounded-lg p-1">
      <iframe
        src={`https://www.youtube.com/embed/${video.id}?autoplay=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64 rounded-lg mb-2"
      />
      <h2>{video.snippet.title}</h2>
      <span>{video.snippet.channelTitle}</span>
      <RelativeTime isoDateString={video.snippet.publishedAt} />
    </div>
  );
}
