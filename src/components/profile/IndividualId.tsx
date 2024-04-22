import React, { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { ProfileContext } from "../../context/profile";
import {DefaultAvatar} from '../../components'
export default function IndividualId() {
  const { profileData, user } = useContext(ProfileContext);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="size-[100px] ">
        {user?.avatar?.url ? (
          <img className=" h-full w-full" src={user?.avatar?.url} alt="" />
        ) : (
          // <img
          //   className=" h-full w-full"
          //   src="/img/ProfilePlaceholder.png"
          //   alt=""
          // />
         <DefaultAvatar />
        )}
      </div>
      <span className="font-medium text-[24px] capitalize">
        {" "}
        {`${
          profileData?.result?.name ? profileData?.result?.name : user?.name
        }`}
      </span>
      <div className="flex gap-4 font-normal text-base text-[#757575] ">
        <span className="">
          {" "}
          {profileData?.result?.height
            ? profileData?.result?.height + " cm"
            : "Height "}
        </span>{" "}
        <span className="">
          {" "}
          {profileData?.result?.age
            ? profileData?.result?.age + " years"
            : "Age"}
        </span>
      </div>
      <div className="mb-6 font-medium text-base text-[#757575] flex justify-center gap-6">
        <div className="flex items-center gap-[4px]">
          <CiLocationOn className="size-[20px]" />

          <span>
            {" "}
            {profileData?.result?.location
              ? profileData?.result?.location
              : "Add Location"}{" "}
          </span>
        </div>
        <div className="flex items-center gap-[4px]">
          <GoLink className="size-[20px]" />

          <span>
            {" "}
            {profileData?.result?.location
              ? profileData?.result?.website
              : "Add website"}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
