import RelativeTime from "./RelativeTime";
import { BiLike, BiDislike } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

export default function Comment({ comment }) {
  return (
    <div className="flex mb-2">
      <img
        src={comment.topLevelComment.snippet.authorProfileImageUrl}
        alt={comment.topLevelComment.snippet.authorDisplayName}
        className="w-10 h-10 rounded-[100%] mr-4"
      />

      <div class="flex flex-col text-[#F1F1F1]">
        <div class="flex">
          <h3 className="text-[13px] font-medium mr-1">
            {comment.topLevelComment.snippet.authorDisplayName}
          </h3>
          <span className="text-[#AAAAAA] text-[12px]">
            <RelativeTime
              isoDateString={comment.topLevelComment.snippet.publishedAt}
            />
            {`${
              comment.topLevelComment.snippet.publishedAt ===
              comment.topLevelComment.snippet.updatedAt
                ? ""
                : "(editied)"
            }`}
          </span>
        </div>
        <p className="text-[14px] pr-10 mb-2">
          {comment.topLevelComment.snippet.textOriginal}
        </p>
        <div class="flex items-center">
          <button className="hover:bg-[#3D3D3D] rounded-full cursor-pointer">
            <BiLike className="w-8 h-8 p-1.25 text-[#FFFFFF]" />
          </button>
          <span className="text-[#AAAAAA] text-[12px] mr-2">
            {comment.topLevelComment.snippet.likeCount}
          </span>
          <button className="hover:bg-[#3D3D3D] rounded-full cursor-pointer mr-2">
            <BiDislike className="w-8 h-8 p-1.25 text-[#FFFFFF] " />
          </button>
          <button className="w-[53.6px]  text-white text-[12px] rounded-xl hover:bg-[#3D3D3D] font-bold cursor-pointer py-1 text-center align-middle">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
