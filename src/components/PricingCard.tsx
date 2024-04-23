import React from "react";
import { useNavigate } from "react-router-dom";

export default function PricingCard({ info, paymentPlan }) {
  const navigate = useNavigate();

  return (
    <div
      className={`  ${
        info.title.toLowerCase() === "standard" ? " 2xl:rounded-l-[8px]" : " "
      } ${
        info.title.toLowerCase() === "business" ? " 2xl:rounded-r-[8px]" : " "
      }
      sm:min-w-[400px]
      flex flex-col p-8 text-[#000000] gap-10 bg-white`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-[20px]">{info.title}</span>
          <span className="text-base font-normal">{info.description}</span>
        </div>

        <div className="ml-2">
          <img src={info.logo} alt="logo" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-[2px]">
          <h3 className="font-medium text-[48px]">
            {paymentPlan === "monthly" ? info.monthlyPayment : info.payment}{" "}
          </h3>
          <span className="text-[#757575] font-normal text-base">
            {paymentPlan === "monthly"
              ? info.monthlyDuration
              : info.yearlyDuration}
          </span>
        </div>

        <span className="text-[#757575] font-medium text-base">
          {
            info.title.toLowerCase() === 'standard' ? <span className="">{info.tenor}</span> : <span className="text-transparent">-</span>
          }
        </span>
      </div>

      <div className="w-full h-px bg-[#D6D6D6]"></div>

      <div className="flex flex-col gap-4">
        {info.incentives.map((incentive, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#D6D6D6" />
                <path
                  d="M17.3333 8L9.99996 15.3333L6.66663 12"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-normal text-base">{incentive}</span>
          </div>
        ))}
      </div>

      <div
        onClick={() =>
          navigate(
            paymentPlan === "monthly" ? info.buttonLink2 : info.buttonLink
          )
        }
        className="cursor-pointer bg-customsecondary rounded-[5px] p-4 mt-auto"
      >
        <span className="text-white font-normal text-base">
          {info.buttonText}
        </span>
      </div>
    </div>
  );
}
