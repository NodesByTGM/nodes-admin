import React from "react";

export default function BusunessId() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="size-[100px]">
        <img
          className=" h-full w-full"
          src="/img/CompanyLogoPlaceholder.svg"
          alt=""
        />
      </div>
      <span className="font-medium text-[24px] "> Name of company</span>
      <span className="font-normal text-base text-[#757575] ">
        Year of Establishment
      </span>
      <div className="mb-6 font-normal text-base text-[#000000] flex justify-center gap-1">
        <span className="font-medium">0 </span>connections
      </div>
    </div>
  );
}
