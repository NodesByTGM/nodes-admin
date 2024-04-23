import React from "react";

export default function WelcomeComponent({ title, description, children }) {
  return (
    <div>
      <div className="flex gap-8 rounded-lg border border-[#D6D6D6] bg-paleyellow p-6">
        <div className="flex flex-col gap-6 text-primary max-w-[246px]">
          <span className="font-medium text-[18px]">{title} </span>
          <span className="font-normal text-base">{description}</span>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
