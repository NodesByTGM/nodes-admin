import React from "react";
import { MoreHorizontal, ThumbsDown, ThumbsUp } from "react-feather";
import Avatar from "./Avatar";

export default function ViewCommentSection({
  last = false,
}: {
  last?: boolean;
}) {
  return (
    <div>
      <div className=" mt-[50px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 items-center">
            <Avatar className={"!size-[49px]"} src="/img/avatar.png" />
            <div className="text-sm">
              <p className="font-medium text-base">Jane Doe</p>
              <p className='text-sm text-[#757575]'>4 hours ago</p>
            </div>
          </div>
          <div>
            <MoreHorizontal />
          </div>
        </div>
        <div>
          <p className="mb-4 text-base text-customsecondary ">
            Lorem ipsum dolor sit amet consectetur. Pharetra elementum mattis et
            duis dis.
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center text-placeholder">
              <ThumbsDown className="w-4  text-[#757575] hover:text-[#000000] cursor-pointer" />{" "}
              <span>2</span>{" "}
            </div>
            <div className="flex gap-2 items-center text-placeholder">
              <ThumbsUp className="w-4 text-[#757575] hover:text-[#000000] cursor-pointer" />{" "}
              <span>2</span>{" "}
            </div>
          </div>
        </div>
        {!last ? <hr className="mt-6 border-grey-dark" /> : null}
      </div>
    </div>
  );
}
