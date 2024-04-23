import React from "react";
import { Button, UserPostInitials } from "../../components";
const PaperClip = () => {
  return (
    <div>
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4403 11.0489L11.2503 20.2389C10.1244 21.3648 8.59747 21.9973 7.00529 21.9973C5.41311 21.9973 3.88613 21.3648 2.76029 20.2389C1.63445 19.1131 1.00195 17.5861 1.00195 15.9939C1.00195 14.4018 1.63445 12.8748 2.76029 11.7489L11.9503 2.55894C12.7009 1.80838 13.7188 1.38672 14.7803 1.38672C15.8417 1.38672 16.8597 1.80838 17.6103 2.55894C18.3609 3.30951 18.7825 4.32749 18.7825 5.38894C18.7825 6.4504 18.3609 7.46838 17.6103 8.21894L8.41029 17.4089C8.03501 17.7842 7.52602 17.9951 6.99529 17.9951C6.46456 17.9951 5.95557 17.7842 5.58029 17.4089C5.20501 17.0337 4.99418 16.5247 4.99418 15.9939C4.99418 15.4632 5.20501 14.9542 5.58029 14.5789L14.0703 6.09894"
          stroke="black"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
const PictureIcon = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke="black"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
          stroke="black"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 15L16 10L5 21"
          stroke="black"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default function UserPost({
  isReply,
  isAsk,
  isAskMember,
}: {
  isReply?: boolean;
  isAsk?: boolean;
  isAskMember?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <UserPostInitials />
        <div
          className={`${
            isReply
              ? "border border-[#EFEFEF] rounded-lg px-4 py-2 ml-6 "
              : "ml-2"
          } flex flex-1 items-center justify-between `}
        >
          {isReply ? (
            <span className="font-medium text-base text-[#000000] mr-10">
              Post a reply
            </span>
          ) : null}
          {isAsk ? (
            <span className="font-medium text-base text-[#000000] mr-10">
              Ask for help from the community...
            </span>
          ) : null}
          {isAskMember ? (
            <span className="font-medium text-base text-[#000000] mr-10">
              Ask the members a question...
            </span>
          ) : null}

          <div className="flex items-center justify-between gap-4 ">
            <PaperClip />
            <PictureIcon />
            <Button className={`max-w-max`}>
              {isReply && <span className="">Reply</span>}
              {isAsk && <span className="">Post</span>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
