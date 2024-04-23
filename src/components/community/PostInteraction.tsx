/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { FiShare } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  useLikeCommunityPostMutation,
  useUnlikeCommunityPostMutation,
} from "../../api";
type IPostInteraction = {
  updatePosts?: (e) => void;
  data?: any;
  canShare?: boolean;
};
const CommentIcon = () => {
  return (
    <div className="">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default function PostInteraction({
  updatePosts,
  canShare = true,
  data,
}: IPostInteraction) {
  const user = useSelector((state: RootState) => state.user.user);

  const [likeCommunityPost, { data: likePostResponse }] =
    useLikeCommunityPostMutation();
  const [unlikeCommunityPost, { data: unlikePostResponse }] =
    useUnlikeCommunityPostMutation();

  const unlikePost = () => {
    unlikeCommunityPost({ id: data?.id });
  };

  const likePost = () => {
    likeCommunityPost({ id: data?.id });
  };

  useEffect(() => {
    if (likePostResponse) {
      updatePosts && updatePosts(likePostResponse?.result);
      // alert(JSON.stringify(likePostResponse, null, 2));
    }
  }, [likePostResponse]);

  useEffect(() => {
    if (unlikePostResponse) {
      updatePosts && updatePosts(unlikePostResponse?.result);
      // alert(JSON.stringify(unlikePostResponse, null, 2));
    }
  }, [unlikePostResponse]);

  return (
    <div className={`text-[#000000] font-normal text-base flex gap-6`}>
      <div className="bg-[#FBFBFB] cursor-pointer flex items-center px-4 py-3 gap-[10px]">
        <CommentIcon />
        <span className="">
          24 <span className="text-red-400">*</span>
        </span>
      </div>
      <div className="bg-[#FBFBFB] cursor-pointer flex items-center px-4 py-3 gap-[10px]">
        {data?.liked ||
        data?.likes?.some((item) => item.email === user.email) ? (
          <div
            onClick={() => {
              unlikePost();
            }}
            className="text-primary "
          >
            <BiLike />
          </div>
        ) : (
          <div
            onClick={() => {
              likePost();
            }}
            className=""
          >
            <BiLike />
          </div>
        )}
        <span className="">{data?.likes?.length}</span>
      </div>
      <div
        className={` ${
          canShare ? "" : "hidden"
        } bg-[#FBFBFB] cursor-pointer flex items-center px-4 py-3 gap-[10px]`}
      >
        <FiShare />
        <span className="">Share</span>
      </div>
    </div>
  );
}
