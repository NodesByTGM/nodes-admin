import React from "react";
import AppConfig from "../../utilities/config";
import BusinessId from "./BusinessId";

import { Link } from "react-router-dom";
import { Button,  } from "../index";

export default function BusinessProfileCard() {
 
  return (
    <div className="lg:w-[350px] xl:w-[400px] max-h-max flex text-[#212121]">
      <div className="w-full  p-6 pt-10 flex flex-col justify-center items-center bg-white rounded-lg border border-[#EFEFEF]">
        <BusinessId />

        <div className="mb-10 w-full">
          <div className="p-4 gap-2 font-medium text-primary rounded-lg flex flex-col border border-[#EFEFEF]">
            <span className="text-center text-base">
              Media production company
            </span>

            <span className="text-center text-sm">
              Something about being an amazing media production company and like
              stuff
            </span>
          </div>
        </div>
        <div className={`grid-cols-2 w-full grid  gap-6 `}>
          <Link to={AppConfig.PATHS.Business.Profile} className="w-full">
            <Button className="bg-gradient-to-r from-[#D6DE21] to-[#0C5C56] border-none">Share Profile</Button>
          </Link>

          <Link
            className="w-full"
            to={AppConfig.PATHS.Business.EditProfile}
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
