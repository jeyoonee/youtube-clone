import RelativeTime from "./RelativeTime";
import { BiLike, BiDislike } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

export default function Comment({ comment }) {
  return (
    <div className="flex mb-2">
      <img
        src={comment.topLevelComment.snippet.authorProfileImageUrl}
        alt={comment.topLevelComment.snippet.authorDisplayName}
        className="w-10 h-10 rounded-[100%]"
      />

      <div class="flex flex-col">
        <div class="flex">
          <h3>{comment.topLevelComment.snippet.authorDisplayName}</h3>
          <span>
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
        <p>{comment.topLevelComment.snippet.textOriginal}</p>
        <div class="flex">
          <div>
            <BiLike /> <span>{comment.topLevelComment.snippet.likeCount}</span>
          </div>
          <BiDislike />
          <span>Reply</span>
        </div>
        <div className="text-blue">
          <VscChevronDown />
          <span className="font-bold">{comment.totalReplyCount} replies</span>
        </div>
      </div>

      {/* <h2>{title}</h2>
      <span>
        {channelTitle} {}
      </span>
      <RelativeTime isoDateString={publishedAt} /> */}
    </div>
  );
}
