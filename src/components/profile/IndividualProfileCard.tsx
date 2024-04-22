import React, { useContext } from "react";
import AppConfig from "../../utilities/config";
import { ProfileContext } from "../../context/profile";
import IndividualId from "./IndividualId";
import BusinessId from "./BusinessId";

import { Link } from "react-router-dom";
import { Button, ButtonOutline } from "../index";

import { Interaction } from "../../components";
export default function Individual() {
  const { profileType, profileData } = useContext(ProfileContext);

  const bio = {
    id: "1",
    title: "Your headline and bio goes her",
    text: " Share more about yourself and what you hope to accomplish",
    img: null,
  };
  return (
    <div className="w-[400px] max-h-max flex text-[#212121]">
      <div className="w-full profile-card-shadow p-6 pt-10 flex flex-col justify-center items-center bg-white rounded-lg">
        {profileType.toLowerCase() == "business" ? (
          <BusinessId />
        ) : (
          <IndividualId />
        )}

        {profileType.toLowerCase() == "talent" ? (
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="text-base font-normal text-[#000000]">
              0 Followers
            </span>
            <span className="text-base font-normal text-[#000000]">
              0 Following
            </span>
          </div>
        ) : null}

        <div className="mb-10 w-full">
          <Interaction
            data={bio}
            headline={profileData?.result?.headline}
            bio={profileData?.result?.bio}
          />
        </div>
        <div
          className={`${
            profileType.toLowerCase() == "individual"
              ? "grid-cols-1"
              : "grid-cols-2"
          } w-full grid  gap-6 `}
        >
          {profileType.toLowerCase() !== "individual" && (
            <Link
              to={AppConfig.PATHS.Dashboard.Profile.Base}
              className="w-full"
            >
              <ButtonOutline>Share Profile</ButtonOutline>
            </Link>
          )}
          <Link
            className="w-full"
            to={AppConfig.PATHS.Dashboard.Profile.EditProfile}
          >
            <Button>
              <span className="text-base font-medium">Edit Your Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
