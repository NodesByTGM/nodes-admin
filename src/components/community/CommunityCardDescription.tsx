import React from "react";

export default function CommunityCardDescription({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-primary  rounded-lg border border-[#EFEFEF] bg-[#FBFCEB] p-4    ">
      <span className="font-medium text-sm">{title}</span>
      <p className="font-normal text-sm max-h-[42px] truncate">{description}</p>
    </div>
  );
}
