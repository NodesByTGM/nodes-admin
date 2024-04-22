import React from "react";

export default function AdminPageNav({ navs, setSelectedNav, selectedNav }) {
  return (
    <div>
      <div
        className="flex items-center   overflow-x-auto  border border-[#D9D9D9] max-w-max rounded
"
      >
        {navs.map((nav) => (
          <div
            onClick={() => setSelectedNav(nav)}
            key={nav?.label}
            className={`
            ${nav?.label !== navs[0]?.label ? "border-l" : ""} 
            ${selectedNav.label !== navs[0]?.label ? "" : ""} 
            ${
              selectedNav?.label?.toLowerCase() == nav?.label?.toLowerCase()
                ? "bg-[#D9D9D9] text-[#212121] "
                : " text-[#757575] "
            } flex cursor-pointer flex-col items-center justify-center text-nowrap  pb-2   pt-2 px-4 font-semibold  `}
          >
            <div className="flex gap-2">
              <span className="text-base font-medium ">{nav?.label}</span>
              {/* {nav?.count && (
                <div
                  className={`${
                    selectedNav?.label?.toLowerCase() ==
                    nav?.label?.toLowerCase()
                      ? "border-adminprimary "
                      : "border-[#000000] "
                  } size-6 rounded-full border flex items-center justify-center`}
                >
                  {nav.count}
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
