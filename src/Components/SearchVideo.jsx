import RelativeTime from "./RelativeTime";
import { useNavigate } from "react-router";

export default function SearchVideo({ video }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt, description } =
    video.snippet;

  return (
    <div
      className="flex bg-black text-[#AAAAAA] mb-4 w-full rounded-lg  cursor-pointer"
      onClick={() => navigate(`/${video.id.videoId}`)}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="min-w-[240px] max-w-[500px] w-50 rounded-xl mr-4 basis-1/2"
      />

      <div className="flex flex-col text-[12px] basis-1/2">
        <h2 className="text-[#F1F1F1] text-[18px] hover:text-white">{title}</h2>
        <RelativeTime className="" isoDateString={publishedAt} />
        <span className="py-3 ">{channelTitle}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
