import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { getInitials } from "../utilities";

export default function UserPostInitials({ name }: { name?: string }) {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-customsecondary">
      {name ? (
        <span className="">{getInitials(name)}</span>
      ) : (
        <span>{getInitials(user?.name)}</span>
      )}
    </div>
  );
}
