import React from "react";

export default function AdminPeriodFilter({
  periods,
  setSelectedPeriod,
  selectedPeriod,
}) {
  return (
    <div>
      <div
        className="flex items-center   overflow-x-auto  border border-[#D9D9D9] max-w-max rounded
"
      >
        {periods.map((period) => (
          <div
            onClick={() => setSelectedPeriod(period)}
            key={period?.label}
            className={`
            ${period?.label !== periods[0]?.label ? "border-l" : ""} 
            ${selectedPeriod.label !== periods[0]?.label ? "" : ""} 
            ${
              selectedPeriod?.label?.toLowerCase() ==
              period?.label?.toLowerCase()
                ? "bg-customprimary text-[#ffffff] "
                : " text-[#757575] "
            } flex cursor-pointer flex-col items-center justify-center text-nowrap  pb-2   pt-2 px-4 font-semibold  `}
          >
            <div className="flex gap-2">
              <span className="text-base font-medium ">{period?.label}</span>
              {/* {period?.count && (
                <div
                  className={`${
                    selectedPeriod?.label?.toLowerCase() ==
                    period?.label?.toLowerCase()
                      ? "border-adminprimary "
                      : "border-[#000000] "
                  } size-6 rounded-full border flex items-center justify-center`}
                >
                  {period.count}
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
