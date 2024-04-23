import React from "react";
import CommunityCardDescription from "./CommunityCardDescription";
type ICommunityBrandsCard = {
  isConnected?: boolean;
};
export default function CommunityBrandsCard({
  isConnected = false,
}: ICommunityBrandsCard) {
  return (
    <div className="p-6 w-full flex flex-col gap-6 border border-[#EFEFEF] rounded-lg      ">
      <div className="h-[120px] bg-primary rounded"></div>
      <div className="flex gap-2 items-center text-primary">
        <span className=" font-medium text-base">The Grid Management</span>
      </div>

      <div className="">
        {" "}
        <CommunityCardDescription
          title={"Production assistant"}
          description={
            "Something about being an amazing media production company and like stuff something smoething"
          }
        />
      </div>

      <div className="flex items-center justify-between gap-4 text-customprimary font-medium text-sm">
        <span className="">View profile</span>
        {isConnected ? (
          <span className="">Message</span>
        ) : (
          <span className="">Connect</span>
        )}
      </div>
    </div>
  );
}
