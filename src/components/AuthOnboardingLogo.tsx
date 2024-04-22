/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
export default function AuthOnboardingLogo({ link }: { link: any }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <Link to="/auth/login">
          <div>
            <img src="/nodes-logo-black.svg" alt="" className="w-8" />
          </div>
        </Link>
        <div className="text-sm font-normal">
          <span>{link?.text2}</span>
          <Link to={link?.url} className="ml-1 text-primary cursor-pointer">
            {link?.text1}
          </Link>
        </div>
      </div>
    </div>
  );
}
