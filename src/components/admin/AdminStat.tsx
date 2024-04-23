import React from "react";

export default function AdminStat({
  accountType,
  numberOfUsers,
  trending,
  percentage,
}) {
  return (
    <div className={"p-6 rounded border border-[#D9D9D9"}>
      <div className="flex flex-col">
        <span className="font-medium text-[#000000] text-base mb-[29px]">
          {accountType}
        </span>
        <span className="font-bold text-[##0100B] text-[32px] mb-[24px]">
          {numberOfUsers}
        </span>

        <div className="flex text-sm font-normal text-[#808785]">
          {trending ? (
            <span className="flex gap-1">
              <UpTrendArrow />{" "}
              <span className="text-[#05A405]">{percentage}%</span>
            </span>
          ) : (
            <span className="flex gap-1">
              <DownTrendArrow />{" "}
              <span className="text-[#ED254E]">{percentage}%</span>
            </span>
          )}
          <span className="ml-1"> versus yesterday</span>
        </div>
      </div>
    </div>
  );
}

function UpTrendArrow() {
  return (
    <div className="">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5407 5.58283L6.99982 2.04199L3.45898 5.58283"
          stroke="#05A405"
          stroke-width="1.5"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.9581V2.14062"
          stroke="#05A405"
          stroke-width="1.5"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
function DownTrendArrow() {
  return (
    <div className="">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.45935 8.41717L7.00018 11.958L10.541 8.41717"
          stroke="#ED254E"
          stroke-width="1.5"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 2.04188V11.8594"
          stroke="#ED254E"
          stroke-width="1.5"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
