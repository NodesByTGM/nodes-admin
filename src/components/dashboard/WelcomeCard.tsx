/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";

type IWelcomeCardProps = {
  text1: string;
  text2?: string;
  icon?: any;
  buttonText?: string;
  buttonLink: string;
  action?: () => void;
};
export default function WelcomeCard({
  text1,
  text2,
  icon,
  buttonText,
  buttonLink,
  action,
}: IWelcomeCardProps) {
  return (
    <div className={"bg-[#ffffff] p-6 rounded-lg h-full"}>
      <div
        style={{ backgroundImage: 'url("/img/WelcomeCardbgImg.png")' }}
        className="flex flex-col h-full"
      >
        <div className="flex gap-6 mb-[103px] justify-between items-start">
          <span className="font-medium text-[18px] ">
            {text1} <br /> {text2}
          </span>
          <img src={icon} alt="" className="" />
        </div>
        <div className="mt-auto">
          {action ? (
            <Button className="bg-primary" onClick={() => action()}>
              <span className="text-base font-medium">{buttonText}</span>
            </Button>
          ) : (
            <Link to={buttonLink}>
              <Button className="bg-primary">
                <span className="text-base font-medium">{buttonText}</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
