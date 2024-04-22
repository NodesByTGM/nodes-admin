/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UserPost, UserPostInitials, PostInteraction } from "../../components";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { formatDate } from "../../utilities";

type ICommunityPost = {
  updatePosts?: (e) => void;
  data?: any;
  canShare?: boolean;
  canReply?: boolean;
};
export default function CommunityPost({
  updatePosts = () => {},
  data,
  canShare = true,
  canReply = true,
}: ICommunityPost) {
  return (
    <div className="flex flex-col w-full">
      {/* <pre>{JSON.stringify(data.attachments, null, 2)}</pre> */}

      <div className="mb-8 flex items-center justify-between">
        <div className="flex gap-2 items-center font-medium text-sm">
          <UserPostInitials name={data?.author?.name} />
          <span className="text-[#000000]">{data?.author?.name}</span>
          <div className="size-1 rounded-full bg-[#D9D9D9]"></div>
          <span className=" text-[#828282]">{formatDate(data?.updatedAt)}</span>
        </div>

        <div className="">
          <IoEllipsisHorizontalSharp />
        </div>
      </div>
      <span className="mb-10 text-[#000000] text-base font-normal">
        {data?.body}
      </span>
      <div className="flex mb-10 gap-3">
        {data?.attachments?.map((img) => (
          <img
            key={img?.id}
            src={img.url}
            alt=""
            className="rounded-md h-[173px] w-full max-w-[274px]"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <PostInteraction
          data={data}
          canShare={canShare}
          updatePosts={updatePosts}
        />
      </div>
      {canReply ? (
        <div className="mt-8">
          <UserPost isReply />
        </div>
      ) : null}
    </div>
  );
}
