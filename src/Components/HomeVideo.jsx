import RelativeTime from "./RelativeTime";
import { useNavigate } from "react-router";
import formatViewCount from "../utils/formatViewCount";

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
