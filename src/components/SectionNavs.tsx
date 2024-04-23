import React from "react";

export default function SectionNavs({
  navs,
  setSelectedNav,
  selectedNav,
}) {
  return (
    <div >
      {" "}
      <div className="flex items-center  gap-[8px] overflow-x-auto  ">
        {navs.map((nav) => (
          <div
            onClick={() => setSelectedNav(nav)}
            key={nav?.label}
            className={`${
              selectedNav?.label?.toLowerCase() == nav?.label?.toLowerCase()
                ? "border-primary text-primary "
                : "border-transparent text-[#000000] "
            } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] pb-2   pt-2 px-4 font-semibold  `}
          >
            <div className="flex gap-2">
              <span className="text-base font-medium ">{nav?.label}</span>
              {nav?.count && (
                <div
                  className={`${
                    selectedNav?.label?.toLowerCase() ==
                    nav?.label?.toLowerCase()
                      ? "border-primary "
                      : "border-[#000000] "
                  } size-6 rounded-full border flex items-center justify-center`}
                >
                  {nav.count}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
