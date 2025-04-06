import RelativeTime from "./RelativeTime";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import formatNumber from "../utils/formatNumber";
import ChannelInfo from "./ChannelInfo";

export default function DetailVideo({ video }) {
  const { title, channelId, publishedAt, description } = video.snippet;
  const { likeCount, viewCount } = video.statistics;

  return (
    <div className="flex flex-col bg-black text-[#F1F1F1] mb-2">
      <div className="aspect-video mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl w-full h-full"
        />
      </div>

      <h2 className="text-[20px] font-bold px-[13px] py-3">{title}</h2>
      <div className="px-[13px] flex justify-between items-center text-white mb-3">
        <ChannelInfo id={channelId} />

        <div className="flex items-center my-1">
          <button className="bg-[rgb(40,40,40)] text-white rounded-l-full hover:bg-[#3D3D3D] w-20 h-9 text-center cursor-pointer aspect-square flex justify-between items-center">
            <BiLike className="ml-3 w-5 h-5" />
            <span className="border-r border-[#585D61] h-6 text-center font-bold pr-3 text-[14px]">
              {formatNumber(likeCount)}
            </span>
          </button>

          <button className="bg-[#282828] rounded-r-full hover:bg-[#3D3D3D] w-[52px] h-9 text-center cursor-pointer aspect-square">
            <BiDislike className="ml-3 text-white w-5 h-5" />
          </button>
          <button className="flex justify-center items-center bg-[#282828] hover:bg-[#3D3D3D] rounded-full text-white px-3 h-9 cursor-pointer ml-2">
            <PiShareFatLight className="w-6 h-6 mr-1" />
            <span className="text-[14px] font-medium"> Share</span>
          </button>
          <button className="bg-[#282828] rounded-full hover:bg-[#3D3D3D] w-9 h-9 text-center cursor-pointer aspect-square ml-2">
            <HiOutlineDotsHorizontal className="text-white m-auto w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-[#282828] rounded-xl h-[104px] p-3 cursor-pointer">
        <p className="flex text-[#F1F1F1] font-bold text-[14px]">
          <span className="mr-2">{formatNumber(viewCount)} views</span>
          <RelativeTime isoDateString={publishedAt} />
        </p>
        <p className="text-[#FFFFFF] text-[14px] truncate">{description}</p>
      </div>
    </div>
  );
}
