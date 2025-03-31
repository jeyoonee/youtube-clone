import RelativeTime from "./RelativeTime";
import { useNavigate } from "react-router";

export default function SearchVideo({ video }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;

  return (
    <div
      className="bg-black text-white mb-2 w-50 rounded-lg p-1 cursor-pointer"
      onClick={() => navigate(`/${video.id.videoId}`)}
    >
      <img src={thumbnails.default.url} alt={title} />

      <h2>{title}</h2>
      <span>{channelTitle}</span>
      <div>
        {/* todo: '~ ago' 연 단위도 추가해 다시 설정 */}
        <RelativeTime isoDateString={publishedAt} />
      </div>
    </div>
  );
}
