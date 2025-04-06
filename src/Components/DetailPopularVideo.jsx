import RelativeTime from "./RelativeTime";
import { useNavigate } from "react-router";
import formatNumber from "../utils/formatNumber";

export default function DetailPopularVideo({ video }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;

  return (
    <div
      className="bg-black text-white mb-2 rounded-lg p-1 cursor-pointer flex "
      onClick={() => navigate(`/${video.id}`)}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="rounded-lg w-[168px] h-[94px] mr-2"
      />
      <div className=" text-[12px] text-[#AAAAAA] lg:max-w-[202px] ">
        <h2 className="mb-4 text-[14px] text-[#F1F1F1] font-bold h-10 truncate">
          {title}
        </h2>
        <p>{channelTitle}</p>
        <p className="">
          <span> {formatNumber(viewCount)} views</span>
          <span className="mx-1">•</span>
          <RelativeTime isoDateString={publishedAt} />
        </p>
      </div>
    </div>
  );
}
