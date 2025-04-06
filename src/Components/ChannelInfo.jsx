import { useQuery } from "@tanstack/react-query";
import { fetchChannelInfo } from "../api";
import formatNumber from "../utils/formatNumber";

export default function ChannelInfo({ id }) {
  console.log("받았니", id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchChannelInfo(id),
  });

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Something went wrong 😖</p>;
  }

  return (
    <div className="flex itmes-center justify-center">
      <img
        src={data.snippet.thumbnails.medium.url || null}
        alt={`${data.snippet.title} 프로필`}
        className="rounded-full w-10 h-10 mr-3 cursor-pointer"
      />
      <div className="flex flex-col mr-6">
        <h3 className="text-16 truncate cursor-pointer text-[#F1F1F1] font-semibold mb-[1.6px]">
          {data.snippet.title}
        </h3>
        <span className="text-[#AAAAAA] text-[12px]">
          {formatNumber(data.statistics.subscriberCount)} subscribers
        </span>
      </div>
      <button className="rounded-full px-3 text-black h-[36px] bg-[#F1F1F1] hover:bg-[#D9D9DA] cursor-pointer text-[14px] font-semibold">
        Subscribe
      </button>
    </div>
  );
}
