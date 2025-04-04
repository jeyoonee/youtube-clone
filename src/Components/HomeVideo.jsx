import RelativeTime from "./RelativeTime";
import { useNavigate } from "react-router";

function formatViewCount(count) {
  const num = parseInt(count, 10);
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}
export default function HomeVideo({ video }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;

  return (
    <div
      className="flex flex-col text-white mb-2 w-full rounded-lg cursor-pointer"
      onClick={() => navigate(`/${video.id}`)}
    >
      <img src={thumbnails.medium.url} alt={title} className="rounded-xl" />

      <div className="px-1 py-2">
        <h2 className="text-4 font-medium">{title}</h2>
        <span className="text-[14px] text-[#aaa] hover:text-white">
          {channelTitle}
        </span>
        <p className="text-[14px] text-[#aaa]">
          <span> {formatViewCount(viewCount)} views</span>
          <span className="mx-1">•</span>
          <RelativeTime isoDateString={publishedAt} />
        </p>
      </div>
    </div>
  );
}
