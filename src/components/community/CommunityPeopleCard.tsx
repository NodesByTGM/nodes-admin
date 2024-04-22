import React from "react";
import PeopleCardFieldPill from "./PeopleCardFieldPill";
import CommunityCardDescription from "./CommunityCardDescription";
type ICommunityPeopleCard = {
  isConnected?: boolean;
};
export default function CommunityPeopleCard({
  isConnected = false,
}: ICommunityPeopleCard) {
  return (
    <div className="p-6 w-full flex flex-col gap-6 border border-[#EFEFEF] rounded-lg      ">
      <div className="h-[192px] bg-secondary rounded"></div>
      <div className="flex gap-2 items-center text-primary">
        <span className=" font-medium text-base">Aderinsola Adejuwon</span>
        <div className="size-1 bg-[#085A55] rounded-full"></div>
        <span className="font-normal text-xs">Pro User</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <PeopleCardFieldPill text="Movie/Production" />
        <PeopleCardFieldPill text="Movie/Production" />
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
