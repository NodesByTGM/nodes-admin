/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function YellowCards({
  title,
  subTitle,
  children,
  bottomText,
}: {
  title?: string;
  subTitle?: string;
  children: any;
  bottomText?: string;
}) {
  return (
    <div className="w-full p-6 rounded-[5px] bg-[#FBFCE9]">
      <div className="flex flex-col gap-2 text-base text-[#212121] ">
        <span className="font-medium ">{title}</span>
        <span className="mb-6"> {subTitle}</span>
      </div>
      {children}

      {bottomText && (
        <div className="flex justify-end">
          {" "}
          <span className="mt-6 ml-auto text-primary text-base font-medium">
            {bottomText}
          </span>
        </div>
      )}
    </div>
  );
}
