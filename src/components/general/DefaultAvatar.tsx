import React from "react";
import { FaCircleUser } from "react-icons/fa6";

export default function DefaultAvatar() {
  return (
    <div className="">
      {" "}
      <div className="h-full w-full rounded-full">
        <FaCircleUser className="text-primary bg-secondary  rounded-full h-full w-full" />
      </div>
    </div>
  );
}
